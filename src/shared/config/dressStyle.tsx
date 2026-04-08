

export interface Style{
    title: string,
    img?: string,
    link?: string,
    size?: "small"| "big"
}

export const dressStyles : Style[]=[
{title:"Casual" , img: "/imgs/styles/id1.jpg", link: "/catalog?style=casual", size: "small"},
{title:"Formal" , img: "/imgs/styles/id2.jpg", link: "/catalog?style=formal", size:"big"},
{title:"Party" , img: "/imgs/styles/id3.jpg", link: "/catalog?style=party", size: "big"}, 
{title:"Gym" , img: "/imgs/styles/id4.jpg", link: "/catalog?style=gym", size: "small"}
]