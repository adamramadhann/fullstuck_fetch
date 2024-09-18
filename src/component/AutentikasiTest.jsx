import React, { useState, useRef } from 'react';

const AuthCode = () => {
    const [authCode, setAuthCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Hanya angka
        const newAuthCode = [...authCode];
        newAuthCode[index] = value;

        // Jika input tidak kosong, pindah ke input berikutnya
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }

        setAuthCode(newAuthCode);
    };

    const handleKeyDown = (e, index) => {
        // Jika tekan backspace dan kolom saat ini kosong, pindah ke kolom sebelumnya
        if (e.key === 'Backspace' && !authCode[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const code = authCode.join('');
        
        // Gantilah dengan kode otentikasi yang sesuai
        if (code === '123456') {
            alert('Kode otentikasi berhasil!');
        } else {
            alert('Kode otentikasi salah!');
        }
    };

    return (
        <div>
            <h2>Masukkan Kode Otentikasi</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {authCode.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            maxLength="1"
                            style={{ width: '50px', height:'50px    ', textAlign: 'center', margin: '5px' }}
                        />
                    ))}
                </div>
                <button type="submit">Verifikasi</button>
            </form>
        </div>
    );
};

export default AuthCode;
