import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const frmContact = { userEmail: '', name: '', emailDetails: '' };
    const [contact, setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };
    const handleSubmit = e => {
        e.preventDefault();

        emailjs.send('default_service', 'template_zp2q06m', contact, 'user_UkaLgambqoUYuhrnBkCRa')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setContact(frmContact);
                setShowMessage(true);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
    return (
        <>
             <div className=" p-11">
              
                <form onSubmit={handleSubmit} className="md:py-12 md:px-12 px-6 py-6  dark:bg-black rounded-2xl shadow-2xl dark:border-yellow-500 ">
                    <div className="text-3xl font-bold text-center mb-4 cursor-pointer dark:text-white"><h3 className="font-weight-bold mb-4"> Say Hello <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/waving-hand_1f44b.png" alt="" className="w-11 text-center  md:w-10 inline wow animate__animated animate__shakeX " /> </h3>
                    </div>

                    <div className="space-y-4 dark:text-white">
                        <div className="pt-3 col-md-5 mx-auto">
                            <div className=""> <b>Name</b> <br />
                                <input value={contact.emailTitle} required type="text" name="name" onChange={handleChange} className="block text-sm py-3 px-4 rounded-lg w-full shadow-xl md:shadow outline-none border-b-2 dark:bg-black border-yellow-500" placeholder="Your name" />
                            </div>
                        </div>
                        <div className=""> <b>Your Email</b> <br />
                            <input required type="email" value={contact.userEmail} name="userEmail" onChange={handleChange}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  title="Type a valid mail  " className="  md:shadow shadow-xl block text-sm py-3 px-4 rounded-lg w-full border-b-2 outline-none dark:bg-black border-yellow-500" placeholder="Your email" />
                        </div>
                    </div>

                    <div className="pt-3">
                        <div className=" dark:text-white "> <b>Describe your concerns</b> <br />
                            <textarea required name="emailDetails" onChange={handleChange} className="block text-sm  md:shadow shadow-xl  py-3 px-4 rounded-lg w-full border-b-2 outline-none dark:bg-black dark:text-white border-yellow-500" placeholder="Describe your concerns" value={contact.emailDetails}></textarea>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button className="btn btn-primary px-5 py-2 bg-yellow-500 rounded-lg font-bold shadow-2xl ">CONTACT</button>
                    </div>
                </form>

            </div>   
            {showMessage ? <div class="text-center">
                    <div class="inline-flex items-center bg-white dark:bg-transparent leading-none text-black-600 rounded-full p-2 shadow-xl text-teal text-sm">
                        <span class="inline-flex px-2 dark:text-white">Email Send Success!</span>
                        <span class="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center"><i class="fas fa-check text-white"></i></span>
                    </div>
                </div>
                    : ``}
        </>
    );
}
export default Contact;


