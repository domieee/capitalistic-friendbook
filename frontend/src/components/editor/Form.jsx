import { useRef, useEffect } from "react"

const Form = ({ friends, setFriends }) => {



    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const genderRef = useRef('')
    const ageRef = useRef('')
    const mailRef = useRef('')
    const telRef = useRef('')
    const streetRef = useRef('')
    const cityRef = useRef('')
    const companyRef = useRef('')
    const salaryPerYearRef = useRef('')

    const sendFormData = async (req) => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND}/editor/send`, {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify({
                first_name: firstNameRef.current.value,
                last_name: lastNameRef.current.value,
                gender: genderRef.current.value,
                age: ageRef.current.value,
                email: mailRef.current.value,
                tel: telRef.current.value,
                street: streetRef.current.value,
                city: cityRef.current.value,
                company: companyRef.current.value,
                salaryPerYear: salaryPerYearRef.current.value,
                avatar: `xsgames.co/randomusers/avatar.php?g=${genderRef.current.value.toLowerCase()}/`

            })
        })
        const json = await response.json()
        setFriends(json)
    }

    return (
        <>
            <label htmlFor="firstName">First Name</label>
            <input
                ref={firstNameRef}
                type="text"
                name="firstName"
                id="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <input
                ref={lastNameRef}
                placeholder=""
                type="text"
                name="name"
                id="name" />

            <label htmlFor="gender">Gender</label>
            <select
                ref={genderRef}
                id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Diverse">Diverse</option>
            </select>

            <input
                ref={ageRef}
                type="number"
                name="age"
                id="age"
                min={21}
                max={100} />

            <input
                ref={mailRef}
                type="email"
                name="mail"
                id="mail" />

            <input
                ref={telRef}
                type="tel"
                name="tel"
                id="tel" />

            <input
                ref={streetRef}
                type="text"
                name="street"
                id="street" />

            <input
                ref={companyRef}
                type="text"
                name="company"
                id="company" />

            <input
                ref={salaryPerYearRef}
                type="number"
                name="salary"
                id="salary"
                min={40000} />

            <button onClick={sendFormData}>Send Data</button>
        </>
    )
}

export default Form;