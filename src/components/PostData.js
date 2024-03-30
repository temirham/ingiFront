import axios from "axios";
import { useState } from "react";

function PostData(){
    const [formData, setFormData] = useState({
        title: '',
        price: ''
    });
    const {title, price} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value}) 
    const onSubmit = e => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/games/`, {
            title, price
        })
    };
    return(
        <div className="wrapper p-30">
            <h1 className='content p-50'>Форма добавления нового сервиса в каталог</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label className='form-label'>Название:</label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='название товара'
                        name='title'
                        onChange={e => onChange(e)}
                        value={title}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label'>Цена:</label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='цена товара'
                        name='price'
                        onChange={e => onChange(e)}
                        value={price}
                        required
                    />
                </div>
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
}

export default PostData