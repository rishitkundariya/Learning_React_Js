


const element ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    text:'Visit To Google'
}

render(element);

function render(element){
 if (element != null){
    console.log("Hello");
    const domElement= document.createElement(element.type);
    for(let props in element.props){
        domElement.setAttribute(props,element.props[props]);
    }
    document.getElementById('root').appendChild(domElement);
 }
}