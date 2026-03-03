import { useState } from "react";
import { navLinks } from "../../config/navLinks";

interface NavListProps{
Class: string
}


function NavList({Class}: NavListProps){
const [isOpen, setOpen]=useState(false)
const toggle=()=>{
    setOpen(!isOpen)
}

    return(
<ul className={`${Class}__list`}>
            {navLinks?.map((link, index) =>
              link.children ? (
                <div>
                  <li className={`${Class}__item`} key={index} onClick={toggle}>
                    <a href="#">{link.title} <img src="/shopopen.svg" alt="open sub menu" /></a>
                  </li>
                  {isOpen && (
                    <div className={`${Class}__subMenu`}>
                      <ul className={`${Class}__subList`}>
                        {link.children.map((people, inx) => {
                          return <li  className={`${Class}__subItem`} key={inx}><a href="#">{people.title}</a></li>;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <li className={`${Class}__item`} key={index}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ),
            )}
          </ul>

    )
}

export default NavList