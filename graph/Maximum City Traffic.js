// Example 1
// Input: ["1:[5]”, "2:[5]", ”3:[5]", ’4:[5]", "5: [1,2,3,4]”]
// Output: 1:14,2:13,3:12,4:11,5:4

// Example 2
// Input: ["1:[5]", "2:[5,18]", ”3:[5,12]", ”4:[5] [1,2,3,4]”, "18:[2]", ”12:[3]”]
// Output: 1:44,2:25,3:30,4:41,5:20,12:33,18:27

const Input1 = ["1:[5]", "2:[5]", "3:[5]", "4:[5]", "5:[1,2,3,4]"];
const Input2 = ["1:[5]", "2:[5,18]", "3:[5,12]", "4:[5]", "5:[1,2,3,4]", "18:[2]", "12:[3]"];

function CityTraffic(strArr) {

    // Turn strArr into graph map
    const cities = {};
    let results =[];

    // Helper function - depth first search to create a sum of all the populations
    const dfs = (prevCity, currCity) => {
        let sum = 0;
        let stack = [currCity];
        let visited = {};
        visited[prevCity] = true;

        while (stack.length > 0) {
            let city = stack.pop();
            visited[city] = true;
            sum += city;

            for (neighbor of cities[city]) {
                if (!visited[neighbor]) {
                    stack.push(neighbor);
                }
            }
        }

        return sum;
    }

    // Calculate the traffic for each road and return the maximum
    const maxTraffic = (city) => {
        let maxTraffic = 0;
        for (neighbor of cities[city]) {
            let traffic = dfs(city, neighbor);
            maxTraffic = Math.max(maxTraffic, traffic);
        }

        return maxTraffic;     
    }

    // Convert the input into workable data
    for (str of strArr) {
        const city = JSON.parse(str.split(':')[0]);
        const neighbors = JSON.parse(str.split(':')[1]);
        
        cities[city] = neighbors;
    }

    // Calculate max traffic per city and push them into the results list
    for (city of Object.keys(cities)) {
        const neighbors = cities[city];
        const resultStr = `${city}:${maxTraffic(city)}`
        results.push(resultStr);
    }
    results = results.join(',');
    
    
    // Return results
    console.log(results)
    return results;
}

CityTraffic(Input1);
CityTraffic(Input2);

