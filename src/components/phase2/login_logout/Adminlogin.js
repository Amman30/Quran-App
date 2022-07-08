import React from 'react'

const Adminlogin = () => {


    const formData = new FormData;
    const onFileChange = (e) => {

        console.log(e.target.files[0])
        if (e.target && e.target.files[0]) {
            console.log(formData.append('file', e.target.value[0]));

        }


    }

    const SubmitFile = () => {
        fetch(`https://api-scripture-iust-dev.herokuapp.com/v1/scripture/quraan/testUpload?language=ur&author=web`
            , {

                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": '*',
                },
            }
        ).then(response => {
            console.log(response.statusText);
            <div>Amman</div>
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <div>
                <input type="file" onChange={onFileChange} />
            </div>
            <button onClick={SubmitFile}>Click here</button>
        </div>
    )
}



export default Adminlogin;