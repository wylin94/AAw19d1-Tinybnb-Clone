import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router';

import { createSpot } from '../../store/spot';
import styles from "./CreateSpotForm.module.css"


function CreateSpotForm({onClose}) {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user?.id)

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleCreateSubmit = async (e) => {
        e.preventDefault();
        let newSpot = await dispatch(createSpot({userId, address, city, state, country, name, price}));
        if (newSpot) {
            onClose();
        }
    }

    return(
        <div className={styles.createSpotFormContainer}>
            <h2 className={styles.createSpotFormTitle}>Create Spot</h2>
            <form onSubmit={handleCreateSubmit}>
                <label>Adddress</label>
                <input 
                    type='text'
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)} />
                <label>City</label>
                <input 
                    type='text'
                    required
                    value={city}
                    onChange={e => setCity(e.target.value)} />
                <label>State</label>
                <input 
                    type='text'
                    required
                    value={state}
                    onChange={e => setState(e.target.value)} />
                <label>Country</label>
                <input 
                    type='text'
                    required
                    value={country}
                    onChange={e => setCountry(e.target.value)} />
                <label>Name</label>
                <input 
                    type='text'
                    required
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <label>Price</label>
                <input 
                    type='text'
                    required
                    value={price}
                    onChange={e => setPrice(e.target.value)} />
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateSpotForm;