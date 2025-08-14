import pngs1 from "../../../public//assets/img/pngs/1.png"
import pngs01 from "../../../public//assets/img/pngs/01.png"
import pngs2 from "../../../public//assets/img/pngs/2.png"
import pngs02 from "../../../public//assets/img/pngs/02.png"
import pngs3 from "../../../public//assets/img/pngs/3.png"
import pngs03 from "../../../public//assets/img/pngs/03.png"
import pngs4 from "../../../public//assets/img/pngs/4.png"
import pngs04 from "../../../public//assets/img/pngs/04.png"
import pngs5 from "../../../public//assets/img/pngs/5.png"
import pngs05 from "../../../public//assets/img/pngs/05.png"
import pngs6 from "../../../public//assets/img/pngs/6.png"
import pngs06 from "../../../public//assets/img/pngs/06.png"
import pngs7 from "../../../public//assets/img/pngs/7.png"
import pngs07 from "../../../public//assets/img/pngs/07.png"
import pngs8 from "../../../public//assets/img/pngs/8.png"
import pngs08 from "../../../public//assets/img/pngs/08.png"

export const Productdata = [
    ]


  export const FindeWithId = (id)=>{
    const filterdata = Productdata.filter((ele)=>{
        return ele.id == id
    })
    return filterdata
  }

  export const DeleteWithId = (id)=>{
    const filterdata = Productdata.filter((ele)=>{
        return ele.id != id
    })
    // console.log(filterdata);
    return filterdata
  }