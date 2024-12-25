import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CreditCardDetails2 } from "./CreditCardDetails";
import { useNavigate } from "react-router";

export const Pay = (sumToPay) => {
    const navigate = useNavigate()
    const { sumToPay2 } = sumToPay
    const [newCCdetails, setNewCCdetails] = useState(false)
    const showAlert = () => {
        Swal.fire({
            title: `תשלום בכרטיס אשראי`,
            text: `? האם לחייב את כרטיס האשראי השמור במערכת`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'כן, אני רוצה',
            cancelButtonText: 'לא, ברצוני להכניס פרטי אשראי חדשים'
        }).then((result) => {
            if (result) {
                console.log(result);
                if (!result.isDismissed){
                    Swal.fire('שילמת  בהצלחה', `קוד אישור הוא: ${Math.floor(Math.random() * 8888888)} קבלה נשלחה אלייך למייל`, 'success');
                 navigate(`../../Cars`) }
            }
            else {
                // setNewCCdetails(true)

            }
        }
        )
    }

    useEffect(() => {
        showAlert()
    },)

    return <>
        {newCCdetails && <CreditCardDetails2></CreditCardDetails2>}
    </>
}