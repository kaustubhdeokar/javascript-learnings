document.getElementById('b1').onclick = () => {
    console.log("clicked");
    func();
};

async function func(){
    let resp = await fetch("http://localhost:3000/trail");
    let parsedData = await resp.json();
    console.log(parsedData);
}