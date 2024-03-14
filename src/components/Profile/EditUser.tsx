import React, { useState } from 'react'

interface Props {
    close: () => void
}

const EditUser = ({ close }: Props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleClickClear = () => {
        setFirstName('')
        setLastName('')
    }

    const handleClickSave = () => {
        // TODO save and close profile
        alert('save and close profile');
        close()
    }

    return (
        <>
            <label>First name:
                <input
                    onChange={e => setFirstName(e.target.value.trim())}
                    type='text'
                    value={firstName}
                />
            </label>
            <label>Last name:
                <input
                    onChange={e => setLastName(e.target.value.trim())}
                    type='text'
                    value={lastName}
                />
            </label>
            <button onClick={handleClickClear}>Clear</button>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
        </>
    )
}

export default EditUser