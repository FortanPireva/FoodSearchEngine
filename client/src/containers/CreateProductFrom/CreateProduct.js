import {useState, useEffect} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Logo} from "../../components/Logo/Logo";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {MenuItem} from "@mui/material";
import {useAuth} from "../../hooks/useAuth";
import Routes from "../../Utils/routes";
import {useProducts} from "../../hooks/useProducts";
import {ProductModel} from "../../models/ProductModel";
import {ImageUpload} from "../../components/ImageUpload/ImageUpload";

const theme = createTheme();

const cate = [
    "MEAT_AND_POULTRY",
    "FISH_AND_SEAFOOD",
    "MILK_AND_EGGS",
    "YOGHURTS",
    "READY_MEALS",
];

export const CreateProduct = () => {
    const {loggedIn, user} = useAuth();
    const navigate = useNavigate();
    const [inputType, setInputType] = useState("date");
    const [selectedCategory, setSelectedCategory] = useState("");
    const {addProduct} = useProducts();
    useEffect(() => {
        if (!loggedIn) navigate(Routes.LOGIN);
    }, [loggedIn]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get("name"),
            category: data.get("category"),
            price: data.get("price"),
            expirydate: data.get("expirydate"),
        });
        const product = new ProductModel({
            image: "",
            title: data.get("name"),
            category: data.get("category"),
            expDate: data.get("expirydate"),
            price: data.get("price"),
            userId: user.uid,
        });
        addProduct({...product}).then((result) => {
            console.log(result);
            if (result) navigate(Routes.HOME);
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                        <Logo/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register a product
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{mt: 1}}
                    >
                        <ImageUpload/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Product Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="category"
                            label="Catagory"
                            select
                            value={selectedCategory}
                            name="category"
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            autoComplete="category"
                            autoFocus
                        >
                            {cate.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="price"
                            label="Price"
                            name="price"
                            autoComplete="price"
                            autoFocus
                        />

                        <TextField
                            label="Expiry-date"
                            onFocus={() => {
                                setInputType("date");
                            }}
                            onBlur={() => {
                                setInputType("text");
                            }}
                            type={inputType}
                            margin="normal"
                            required
                            fullWidth
                            id="expirydate"
                            name="expirydate"
                            autoComplete="expirydate"
                            autoFocus
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

        // <form>
        // <h2>Register Your product</h2>
        // <label>Name: </label>
        // <input />
        // <br/>
        // <label>Category: </label>
        // <select>
        //     <option value=""></option>
        //     {categoryS.map(c => <option key={c}>{c}</option>)}
        // </select>
        // <br/>
        // <label>Price: </label>
        // <input />
        // <br/>
        // <label>Expiry Date: </label>
        // <input />
        // <br/>
        // <button type="submit">Submit</button>
        // </form>
    );
};
