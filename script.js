// Taask 01: Iterating with Async/Await
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Example usage:
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

// Task 02: Awaiting a call
async function awaitCall() {
    try {
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Example usage:
awaitCall();

// Task 03: Handling errors with async/await
async function awaitCall() {
    try {
        const response = await fetch('your-api-endpoint');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Example usage:
awaitCall();

// Task 04: Chaining async/await calls
async function asyncFunction1() {
    await new Promise(resolve => setTimeout(() => {
        console.log('Async Function 1');
        resolve();
    }, 1000));
}

async function asyncFunction2() {
    await new Promise(resolve => setTimeout(() => {
        console.log('Async Function 2');
        resolve();
    }, 1000));
}

async function asyncFunction3() {
    await new Promise(resolve => setTimeout(() => {
        console.log('Async Function 3');
        resolve();
    }, 1000));
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

// Example usage:
chainedAsyncFunctions();

// Task 05: Awaiting concurrent requests
async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            fetch('api-endpoint-1'),
            fetch('api-endpoint-2')
        ]);
        const data1 = await response1.json();
        const data2 = await response2.json();
        console.log('Data from API 1:', data1);
        console.log('Data from API 2:', data2);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Example usage:
concurrentRequests();
