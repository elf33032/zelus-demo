import {useEffect,useState} from "react";
import {ref, uploadBytes} from "firebase/storage";
import FormPage1 from "./AddPropertyPages/FormPage1";
import FormPage2 from "./AddPropertyPages/FormPage2";
import FormPage3 from "./AddPropertyPages/FormPage3";
import {storage} from "../Firebase/Firebase";
import axios from 'axios';

interface IData{
    propertyName: string,
    street: string,
    apt: string,
    city: string,
    state: string,
    zip: string,
    firstName: string,
    lastName: string,
}
interface IFiles{
    passport:File,
    ssn: File
}
function AddNewProperty(){
    const strapiKey = '4b31dddd04de00b7695bbd502662fabdb76bf1f064f762359d5c6baf75fa633fa4b61f93fedce792e673d47f16794335ecc276666fe57bf68f1420b9aef2909008c6c8fe5cfa83f1df242db8f4269a14e88906c7ca5e8178bcb32ae3ea76f62add504eb839a8dbe2a2a61479d515305aacb0cf69a41eab3fcb834147600b2b7e';
    useEffect(()=>{
        axios
            .get('http://localhost:1337/api/properties?populate=*')
            .then(function (response) {
                console.log(response.data);
            });

    });
    const testPost = {
        PropertyName: "testProp",
        Address:{
            Street:"Hello Kitty Street",
            Apt:"123",
            City:"NYC",
            State:"CA",
        }
    };

    axios
        .post('http://localhost:1337/api/properties',
            {
                "data":{
                    PropertyName: "testProp",
                    Address:{
                        Street:"Hello Kitty Street",
                        Apt:"123",
                        City:"NYC",
                        State:"CA",
                    }
                }
            })
        .then(function (response) {
            console.log(response.data);
        });
    axios
        .put('http://localhost:1337/api/properties/1',
            {
                "data":{
                    PropertyName: "testProp",
                }
            })
        .then(function (response) {
            console.log(response.data);
        });


    //navigate between pages without url routing
    const[page, setPage] = useState(1);
    //json data
    const[data, setData] = useState<IData>({propertyName: "",
        street: "",
        apt: "",
        city: "",
        state: "",
        zip: "",
        firstName:"",
        lastName:"",
    });
    //picture files
    const[files, setFiles] = useState<IFiles>();

    function nextHandler(newVal:IData){
        setData(newVal);
        setPage(page+1);
    }
    function updateFilesHandler(file:Partial<IFiles>){
        setFiles(prevState => ({...prevState, ...file} as IFiles))
    }
    function submitDataHandler(){
        console.log("Data is: ");
        console.log(data);
        console.log("Files is: ");
        console.log(files);
        // Send HTML POST to Firebase realtime DB api
        axios.post("https://zelus-test-default-rtdb.firebaseio.com/userInfo.json", JSON.stringify(data));
        // Upload files into Firebase Storage
        // Into sub-folder of /images/[first name].[last name]/
        console.log("HERE IS MY FILE")
        let file: keyof IFiles;
        for (file in files){
            if (files) {
                console.log(files[file]);
                const storageRef = ref(storage,`images/${data["firstName"]}_${data["lastName"]}/${files[file].name}`);
                uploadBytes(storageRef, files[file])
                    .then((snapshot) => {
                        console.log(snapshot);}
                    );
            }
        }

        //Go to the final page
        setPage(page+1);
    }
    function prevPage(){
        setPage(page-1);
    }
    return(
        <div>
            {page === 1 && <FormPage1 onNext={nextHandler} default={data}/>}
            {page === 2 && <FormPage2 onNext={submitDataHandler} updateFiles={updateFilesHandler} onBack={prevPage}/>}
            {page === 3 && <FormPage3/>}
        </div>
    );
}
export default AddNewProperty;
export type {IData};
export type {IFiles};