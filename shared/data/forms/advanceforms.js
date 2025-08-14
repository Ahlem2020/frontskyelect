import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Multiselect from "react-select";
import styled from "styled-components";
// import { useDropzone, } from "react-dropzone";
// import { DropzoneAreaBase, DropzoneArea, DropzoneDialog } from "material-ui-dropzone";
// import { createStyles, makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import { AttachFile, Audiotrack, Description, PictureAsPdf, Theaters } from "@material-ui/icons";
import AttachFile from '@mui/icons-material/AttachFile';
import Audiotrack from '@mui/icons-material/AttachFile';
import Description from '@mui/icons-material/AttachFile';
import PictureAsPdf from '@mui/icons-material/AttachFile';
import Theaters from '@mui/icons-material/AttachFile';
import * as basicdatatable from "../../../shared/data/crypto-currencies/qg"
import { FilePond } from "react-filepond";



const CryptMarketingValues =
    [
        {
            "id": 1,
            "nom": "Ali Bongo",
            "prenom": "Ondimba",
            "partie": "PDG",
            "nbVote": 250000,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 2,
            "nom": "Hugues Alexandre",
            "prenom": "Barro Chambrier",
            "partie": "RPM",
            "nbVote": 140000,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 3,
            "nom": "Albert",
            "prenom": "Ondo Ossa",
            "partie": "Indépendant",
            "nbVote": 20000,
            "heure": 23,
            "minute": 1
        },
        {
            "id": 4,
            "nom": "Gérard Ella",
            "prenom": "Nguema Mitoghe",
            "partie": "FPG",
            "nbVote": 80000,
            "heure": 4,
            "minute": 4
        },
        {
            "id": 5,
            "nom": "Thérence Gnembou",
            "prenom": "Moutsona",
            "partie": "PRC",
            "nbVote": 20000,
            "heure": 4,
            "minute": 4
        },
        {
            "id": 6,
            "nom": "Jean Romain",
            "prenom": "Fanguinoveny",
            "partie": "PPG",
            "nbVote": 5000,
            "heure": 4,
            "minute": 4
        },
        {
            "id": 7,
            "nom": "Joachim Mbatchi",
            "prenom": "Pambou",
            "partie": "FDR",
            "nbVote": 55000,
            "heure": 4,
            "minute": 4
        },
        {
            "id": 8,
            "nom": "Abel Mbombe",
            "prenom": "Nzondou",
            "partie": "Indépendant",
            "nbVote": 20000,
            "heure": 4,
            "minute": 4
        },
        {
            "id": 9,
            "nom": "Jean Victor",
            "prenom": "Mouanga Mbadinga",
            "partie": "MESP",
            "nbVote": 50000,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 10,
            "nom": "Jean Delor",
            "prenom": "Biyogue Bi Ntougou",
            "partie": "Indépendant",
            "nbVote": 70000,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 11,
            "nom": "Axel Stophène",
            "prenom": "Ibinga Ibinga",
            "partie": "Indépendant",
            "nbVote": 1000,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 12,
            "nom": "Mike Steeve Dave",
            "prenom": "Jocktane",
            "partie": "Indépendant",
            "nbVote": 900,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 13,
            "nom": "Victoire Lasseni",
            "prenom": "Duboze",
            "partie": "Indépendante",
            "nbVote": 8100,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 14,
            "nom": "Raymond Ndong",
            "prenom": "Sima",
            "partie": "Indépendant",
            "nbVote": 2000,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 15,
            "nom": "Emmanuel Mvé",
            "prenom": "Mba",
            "partie": "Indépendant",
            "nbVote": 60000,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 16,
            "nom": "Thierry Yvon Michel",
            "prenom": "N'goma",
            "partie": "Indépendant",
            "nbVote": 9000,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 17,
            "nom": "Gervais",
            "prenom": "Oniane",
            "partie": "UPR/EPI/RDI",
            "nbVote": 9000,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 18,
            "nom": "Pierre Claver Maganga",
            "prenom": "Moussavou",
            "partie": "PSD",
            "nbVote": 1622,
            "heure": 26,
            "minute": 8
        },
        {
            "id": 19,
            "nom": "Paulette",
            "prenom": "Missambo",
            "partie": "UN",
            "nbVote": 45200,
            "heure": 26,
            "minute": 8
        }

    ];

export const Candidat = () => {
    const objectArray = CryptMarketingValues.map((items) => ({
        value: items.id,
        label: items.nom,
    }));
    return (
        <div>
            <Multiselect options={objectArray} singleSelect displayValue="key" />
        </div>
    );
};
export const Bureau = () => {
    const objectArray = basicdatatable.data.map((items) => ({
        value: items.id,
        label: items.province,
    }));
    return (
        <div>
            <Multiselect options={objectArray} singleSelect displayValue="key" />
        </div>
    );
};
export const Singleselect = () => {
    const objectArray = [
      { value: "Firefox", label: "firefox" },
      { value: "Chrome", label: "chrome " },
      { value: "Safari", label: "safari" },
      { value: "Operate", label: "operate" },
      { value: " Internet Explore", label: "internet explore " },
    ];
    return (
      <div>
        <Multiselect options={objectArray} singleSelect displayValue="key" />
      </div>
    );
  };
// multiple
const animatedComponents = makeAnimated();
const options = basicdatatable.data.map((items, index) => (
    [
        { value: items.id, label: items.provinc },
    ]

));
export function AnimatedMulti() {
    return (
        <Select
            classNamePrefix='nextJsSelect2'
            closeMenuOnSelect={true}
            components={animatedComponents}
            //
            isMulti
            options={options}
        />
    );
}
// Selectdisabled
const selectdisabled = makeAnimated();
const option1 = [
    { value: "Firefox", label: "firefox" },
    { value: "Chrome", label: "chrome " },
    { value: "Safari", label: "safari" },
    { value: "Operate", label: "operate" },
    { value: " Internet Explore", label: "internet explore " },
];
export function Disabledselect() {
    return (
        <Select
            closeMenuOnSelect={true}
            components={selectdisabled}
            classNamePrefix="selectform"
            isDisabled
            options={option1}
        />
    );
}

// Pre-filled-input
const Prefilledinput = makeAnimated();
const optionset2 = [
    { value: "Firefox", label: "firefox" },
    { value: "Chrome", label: "chrome " },
    { value: "Safari", label: "safari" },
    { value: "Operate", label: "operate" },
    { value: " Internet Explore", label: "internet explore " },
];
export function Prefilledinputs() {
    return (
        <Select
            closeMenuOnSelect={false}
            defaultValue={[optionset2[4], optionset2[5]]}
            components={Prefilledinput}
            classNamePrefix="selectform"
            //
            isMulti
            options={optionset2}
        />
    );
}

// Multiple select
const optionsMultipleSelect2 = [
    { value: "Firefox", label: "firefox" },
    { value: "Chrome", label: "chrome " },
    { value: "Safari", label: "safari" },
    { value: "Operate", label: "operate" },
    { value: " Internet Explore", label: "internet explore " },
];
export const MultipleSelect22 = () => {
    const [selected, setSelected] = useState([]);
    return (
        <div>
            <MultiSelect
                options={optionsMultipleSelect2}
                value={selected}
                onChange={setSelected}
            // labelledBy="Select"
            />
        </div>
    );
};

//  <----------------- Container-style for  all dropzone------------------>
const getColor = (props) => {
    if (props.isDragAccept) {
        return "#00e676";
    }
    if (props.isDragReject) {
        return "#ff1744";
    }
    if (props.isFocused) {
        return "#2196f3";
    }
    return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
// -----------------Container-style-end----------------------->

// Dropzone
export function StyledDropzone1() {
    const [filespond, setfilespond] = useState([]);
    return (
        <FilePond className='mt-3 mb-5 m-lg-0'
            allowMultiple={true}
            maxFiles={10}
            server="https://dummyjson.com/products/add"
            files={filespond}
            onupdatefiles={setfilespond}
            allowReorder={true}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
    );
}

// NameLengthValidator 20 dropdown

const maxLength = 20;

function nameLengthValidator(file) {
    if (file.name.length > maxLength) {
        return {
            code: "name-too-large",
            message: `Name is larger than ${maxLength} characters`,
        };
    }

    return null;
}

export function CustomValidation() {
    // const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    // useDropzone({
    //   validator: nameLengthValidator,
    // });

    const acceptedFileItems = []

    const fileRejectionItems = []

    return (
        <section className="container">
            <Container {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>{`Drag 'n'`} drop some files here, or click to select files</p>
                <small>
                    (Only files with name less than 20 characters will be accepted)
                </small>
            </Container>
            <aside>
                {/* <p>Accepted files</p> */}
                <ul>{acceptedFileItems}</ul>
                {/* <p>Rejected files</p> */}
                <p>{fileRejectionItems}</p>
            </aside>
        </section>
    );
}

// disabledropdown

export function Basicdisable() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        disabled: true,
    });

    const files = []

    return (
        <section className="container">
            <Container {...getRootProps({ className: "dropzone disabled" })}>
                <input {...getInputProps()} />
                <p>Dropzone with disabled property:</p>
            </Container>
            <aside>
                {/* <h4>Files</h4> */}
                <ul>{files}</ul>
            </aside>
        </section>
    );
}

// <--------------------------material-ui------------------------->

// Mui-Dropzone

export function Materialui() {
    const [files, setFiles] = useState([]);

    const handleAdd = (newFiles) => {
        newFiles = newFiles.filter(
            (file) => !files.find((f) => f.data === file.data)
        );
        setFiles([...files, ...newFiles]);
    };

    const handleDelete = (deleted) => {
        setFiles(files.filter((f) => f !== deleted));
    };

    return (
        // <DropzoneAreaBase
        //   fileObjects={files}
        //   onAdd={handleAdd}
        //   onDelete={handleDelete}
        // />
        <></>
    );
}
// Material-ui-Dropzone

export function CustomMaterialui() {
    const [filesimade, setFilesimage] = useState([]);
    return (
        <FilePond className='mt-3 mb-5 mt-lg-0'
            files={filesimade}
            allowReorder={true}
            allowMultiple={false}
            onupdatefiles={setFilesimage}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
    );
}
// Material-ui-dropzone 2
export function MUIdropzonebadge(props) {
    // const useStyles = makeStyles((theme) =>
    //   createStyles({
    //     previewChip: {
    //       minWidth: 160,
    //       maxWidth: 210,
    //     },
    //   })
    // );
    const classes = useStyles();
    return (
        <div>
            {/* <DropzoneArea
        showPreviews={true}
        showPreviewsInDropzone={false}
        useChipsForPreview
        previewGridProps={{ container: { spacing: 1, direction: "row" } }}
        previewChipProps={{ classes: { root: classes.previewChip } }}
        previewText="Selected files"
      /> */}
        </div>
    );
}

//materialui-dropzone with button

export function MUIdropzonebutton() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="btn" variant="contained" color="primary" onClick={() => setOpen(true)}>
                Add Image
            </button>

            {/* <DropzoneDialog
        acceptedFiles={["image/*"]}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          console.log("Files:", files);
          setOpen(false);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      /> */}
        </div>
    );
}
