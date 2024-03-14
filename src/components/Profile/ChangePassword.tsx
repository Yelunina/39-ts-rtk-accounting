import React, { useState } from 'react'

interface Props {
    close: () => void
}

const ChangePassword = ({ close }: Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setRepeatPassword('');
    }

    const handleClickSave = () => {
        // TODO save and close password
        if (newPassword === repeatPassword) {
            alert('save and close password');
        } else {
            alert('password and repeat password are defferent')
        }
        close();
    }

    return (
        <div>
            <label>Old password:
                <input
                    onChange={e => setOldPassword(e.target.value.trim())}
                    type='password'
                    value={oldPassword}
                />
            </label>
            <label>New password:
                <input
                    onChange={e => setNewPassword(e.target.value.trim())}
                    type='password'
                    value={newPassword}
                />
            </label>
            <label>Repeat new password:
                <input
                    onChange={e => setRepeatPassword(e.target.value.trim())}
                    type='password'
                    value={repeatPassword}
                />
            </label>
            <button onClick={handleClickClear}>Clear</button>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
        </div>
    )
}

export default ChangePassword