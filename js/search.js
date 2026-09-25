export async function search(keyword) {
    let response = await fetch(`https://api.github.com/search/repositories?q=${keyword}&sort=stars&per_page=10`);

    let data = await response.json();

    console.log(data);
}