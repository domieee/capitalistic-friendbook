import { useEffect, useState } from "react"

const Filter = ({ filterData, loading }) => {
    console.log(loading);

    console.log(filterData);


    if (loading) return

    return (
        <section className="filter">
            <input type="text" />
            <select defaultValue='choose' name="company" id="company">
                <option value="choose" disabled >Company</option>
                {filterData.company.map(company => {
                    return (
                        <option value={company.toLowerCase()}>{company}</option>
                    )
                })}
            </select>

            <select defaultValue='choose' name="company" id="company">
                <option value="choose" disabled >Hard Skills</option>
                {filterData.hardSkills.map(skill => {
                    return (
                        <option value={skill.toLowerCase()}>{skill}</option>
                    )
                })} : ''
            </select>


            <select defaultValue='choose' name="company" id="company">
                <option value="choose" disabled >Soft Skills</option>
                {filterData.softSkills.map(skill => {
                    return (
                        <option value={skill.toLowerCase()}>{skill}</option>
                    )
                })}
            </select>
        </section>
    );
}


export default Filter;