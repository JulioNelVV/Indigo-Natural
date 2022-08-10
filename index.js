//Cambiar el color de los links activos
const $links=[...document.getElementsByClassName("menu__link")];
console.log($links)
$links.forEach($link => {
    $link.addEventListener("click",(e)=>{
        $links.forEach(($item, index)=>{
            $item.classList.remove("menu__link--active")
            if($item===e.target){
                $item.classList.add("menu__link--active");
            }
           
        })
    })
});