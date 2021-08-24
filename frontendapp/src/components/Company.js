import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const Job = (props) => {
    const {
        id,
        name,
        email,
        address,
        employee_size,
        phone_number,
        website,
        is_favorite,
        logo,
    } = props.data;

    const [icon, setIcon] = useState("");
    const [isFavorite, setIsFavorite] = useState(is_favorite);

    useEffect(() => {
        var search_field = document.querySelector(".serch-field");
        search_field.focus();
    }, []);

    const isFavoriteFunc = (isFavorite) => {
        fetch("/api/set_is_favorite/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": cookies.get("csrftoken"),
            },
            credentials: "same-origin",
            body: JSON.stringify({
                isFavorite,
                id,
            })
        })
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
            .then((data) => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const setFavoriteFalseOrTrue = () => {
        if (isFavorite) {
            setIsFavorite(false);
            isFavoriteFunc(false);
        } else {
            setIsFavorite(true);
            isFavoriteFunc(true);
        }
        // console.log(is_favorite);
        // isFavoriteFunc(isFavorite);
    }

    return (
        <div className="job-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="part1">
                <div className="company">
                    <span className="cname">{name}</span>
                    {isFavorite && <span className="featured">Favorite</span>}
                </div>

                <div className="position">{address}</div>

                <div className="details">
                    <span>{employee_size} Employees</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>
                        <i class="fas fa-phone"></i>
                        <a href={`tel:${phone_number}`}>&nbsp;{phone_number}</a>
                    </span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>
                        <a href={website} target="_blank">{website}</a>
                    </span>
                </div>
            </div>
            <div className="part2">
                {!isFavorite ? (
                    <span onClick={setFavoriteFalseOrTrue} className="first">Not Favorite</span>
                    ) : <span onClick={setFavoriteFalseOrTrue} className="second">Favorite</span>
                }
            </div>
        </div>
    );
};


export default Job;

// onClick={() => props.setkeywords(key)}
