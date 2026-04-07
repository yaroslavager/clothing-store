

export interface Style{
    title: string,
    img?: string,
    link?: string,
    size?: "small"| "big"
}

export const dressStyles : Style[]=[
{title:"Casual" , img: "", link: "/catalog?style=casual", size: "small"},
{title:"Formal" , img: "", link: "/catalog?style=formal", size:"big"},
{title:"Party" , img: "", link: "/catalog?style=party", size: "big"}, 
{title:"Gym" , img: "", link: "/catalog?style=gym", size: "small"}
]