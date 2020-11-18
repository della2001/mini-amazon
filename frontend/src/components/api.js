export async function get_small_items() {
    const url = "/items/small"; 
    const data = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
            "Content-Type": "application/json"
          },
    }); 
    const items = data.json();
    return items;
}

