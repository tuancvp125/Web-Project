import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ResetPasswordApi } from '../axios/axios';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get("token");
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!passwordRegex.test(newPassword)) {
                alert('Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ cái viết thường, viết hoa, số và ký tự đặc biệt.');
                return;
            }

            if (newPassword !== reNewPassword) {
                alert('Mật khẩu không khớp. Vui lòng nhập lại.');
                return;
            }
            await ResetPasswordApi(token, newPassword);
            setMessage('Đặt lại mật khẩu thành công. Đang chuyển hướng...');
            setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
            setMessage('Lỗi khi đặt lại mật khẩu. Token không hợp lệ hoặc đã hết hạn.');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-4">Đặt lại mật khẩu</h2>
            <form onSubmit={handleReset} className="flex flex-col gap-4">
                <input
                    type="password"
                    placeholder="Mật khẩu mới"
                    className="border px-4 py-2"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <input
                    type="rePassword"
                    placeholder="Xác nhận mật khẩu mới"
                    className="border px-4 py-2"
                    value={reNewPassword}
                    onChange={(e) => setReNewPassword(e.target.value)}
                    required
                />
                <button type="submit" className="bg-black text-white px-4 py-2">
                    Xác nhận
                </button>
                {message && <p className="text-sm text-center mt-2">{message}</p>}
            </form>
        </div>
    );
};

export default ResetPassword;
