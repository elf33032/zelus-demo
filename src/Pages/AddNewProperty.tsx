import {useState} from "react";
import {ref, uploadBytes} from "firebase/storage";
import FormPage1 from "./AddPropertyPages/FormPage1";
import FormPage2 from "./AddPropertyPages/FormPage2";
import FormPage3 from "./AddPropertyPages/FormPage3";
import {storage} from "../Firebase/Firebase";

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
    //navigate between pages without url routing
    const[page, setPage] = useState(1);
    //json data
    const[data, setData] = useState<IData>({propertyName: '',
        street: '',
        apt: '',
        city: '',
        state:'',
        zip: '',
        firstName:'',
        lastName:'',
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
        fetch(
            "https://zelus-test-default-rtdb.firebaseio.com/userInfo.json",
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        );

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