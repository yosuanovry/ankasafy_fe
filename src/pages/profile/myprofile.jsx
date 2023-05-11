import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Image from "next/image";
import { Poppins } from "next/font/google";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { pink } from "@mui/material/colors";
import { FormControl, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function MyProfile() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [nationality, setNationality] = useState("");
  const [photo, setPhoto] = useState();
  const [storage, setStorage] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [localStorage, setLocalStorage] = useState({
    fullname: "Full Name",
    email: "Email",
    city: "City",
    nationality: "Nationality",
    phone: "Phone",
    photo: "https://res.cloudinary.com/dzvtizxtq/image/upload/v1682490851/ankasafy/pngtree-character-default-avatar-image_2237203_btsaoh.jpg",
    postcode: "Post Code",
    address: "Address",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    if (cookies.token) {
      setStorage(jwtDecode(cookies.token));
    }
  }, [cookies]);

  useEffect(() => {
    if (storage) {
      setLocalStorage({
        fullname: storage.fullname,
        email: storage.email,
        city: storage.city,
        nationality: storage.nationality,
        phone: storage.phone,
        photo: storage.photo,
        postcode: storage.postcode,
        address: storage.address,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    setCurrentPhoto(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0])
  };

  const router = useRouter();

  const Logout = () => {
    removeCookie("token", { path: "/" });
    router.replace("/auth/login");
  };

  const updatePhoto = async () => {
    setLoading(true)
    const formData = new FormData();
    formData.append("photo", photo);
    console.log(formData);
    await axios
      .put(process.env.NEXT_APP_URL + `/users/update-profile-photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let data = {
    fullname,
    phone,
    city,
    address,
    postcode,
    nationality,
  };

  const updateUser = async (e) => {
    handleClose()
    setLoading(true);
    e.preventDefault();
    await axios
      .put(process.env.NEXT_APP_URL + `/users/update-profile-information`, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(data);
        setLoading(true);
        setTimeout(() => {
          Logout();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div id="__next" className="h-full w-full" style={{ backgroundColor: "#F5F6FA" }}>
        <Navbar />

        <div className={`container mx-auto px-4 mt-3 ${poppins.className}`}>
          <div className="flex flex-row gap-4 mt-14">
            {/* {dataFormat?.map((item, index) => ( */}
            <div className="flex flex-col w-2/6 justify-center mx-10 rounded-xl" style={{ backgroundColor: "white" }}>
              <form>
                <div className="flex justify-center mt-8">
                  <Image src={currentPhoto || localStorage.photo} priority alt="dummy" width={128} height={128} style={{ borderWidth: 3, borderRadius: "4rem", borderColor: "#2395FF", width: "8rem" }} />
                </div>
                <div className="flex flex-row justify-center">
                  <div className="flex mt-6 rounded-lg text-sm py-1 md:py-3 font-semibold border-blue-500 border-[2px] sm:text-base" style={{ backgroundColor: "white", color: "#2395FF" }}>
                    <label for="file-input" class="ps-2 pe-2" style={{ cursor: "pointer" }}>
                      Select Photo
                    </label>
                    <input id="file-input" type="file" style={{ position: "absolute", opacity: 0, width: 0, height: 0, pointerEvents: "none" }} onChange={handlePhoto} />
                  </div>
                  {currentPhoto ? (
                    <button onClick={() => updatePhoto()} type="submit" className="flex mt-6 ms-2 rounded-lg text-sm py-1 md:py-3 px-2 font-semibold border-blue-400 border-[2px] sm:text-base bg-blue-400 text-white">
                      Change photo
                    </button>
                  ) : (
                    <div></div>
                  )}
                </div>
              </form>
              <div className="flex justify-center mt-7 text-xl font-bold">{localStorage.fullname}</div>
              <div className="flex flex-row justify-center items-center mt-2 gap-1 text-base">
                <PlaceIcon color="primary" />
                <div>
                  {localStorage.city}, {localStorage.nationality}
                </div>
              </div>

              <div className="flex flex-row justify-between mx-10 mt-10">
                <div className="font-bold text-base">Cards</div>
                <div className="font-bold text-base text-blue-400">+ Add</div>
              </div>

              <div className="flex flex-col mx-10 text-white mt-3 rounded-xl shadow-lg shadow-blue-500/50" style={{ backgroundColor: "#2395FF" }}>
                <div className="pt-4 ps-6 font-bold tracking-widest">4441 1235 5512 5551</div>
                <div className="flex flex-row justify-between pt-4 pb-4 ps-6 pe-6 font-light">
                  <div>X Card</div>
                  <div>$ 1,440.2</div>
                </div>
              </div>

              <div className="flex flex-row justify-between mx-14 mt-10">
                <div className="flex flex-row gap-8 font-bold">
                  <AccountCircleIcon />
                  <div>Profile</div>
                </div>
                <KeyboardArrowUpIcon style={{ rotate: "90deg" }} />
              </div>
              <div className="flex flex-row justify-between mx-14 mt-8">
                <div className="flex flex-row gap-8 font-bold">
                  <StarIcon />
                  <div>My Review</div>
                </div>
                <KeyboardArrowUpIcon style={{ rotate: "90deg" }} />
              </div>
              <div className="flex flex-row justify-between mx-14 mt-8">
                <div className="flex flex-row gap-8 font-bold">
                  <SettingsIcon />
                  <div>Settings</div>
                </div>
                <KeyboardArrowUpIcon style={{ rotate: "90deg" }} />
              </div>
              <div onClick={Logout} className="flex flex-row justify-between mx-14 mt-8 mb-10" style={{ cursor: "pointer" }}>
                <div className="flex flex-row gap-8 font-bold">
                  <LogoutIcon sx={{ color: pink[500] }} />
                  <div style={{ color: "#F24545" }}>Logout</div>
                </div>
                <KeyboardArrowUpIcon sx={{ color: pink[500] }} style={{ rotate: "90deg" }} />
              </div>
            </div>
            {/* ))} */}

            <div className="flex flex-col w-4/6">
              <div className="flex flex-col rounded-xl" style={{ backgroundColor: "white" }}>
                <div className="pt-6 ps-6 tracking-widest text-md text-blue-400">PROFILE</div>
                <div className="flex flex-row pt-2 pb-6 px-6 justify-between items-end">
                  <div className="text-xl font-bold">Profile</div>
                  <div className="font-bold text-sm text-blue-400">Order History</div>
                </div>
                <div className="flex flex-row mt-4 px-6">
                  <div className="flex flex-col w-3/6 px-6">
                    <div className="font-bold mb-2">Contact</div>
                    <FormControl>
                      <label for="standard-password-input text-xxs">Email</label>
                      <TextField id="standard-password-input" type="text" autoComplete="current-password" variant="standard" placeholder={localStorage.email} value={localStorage.email} />
                      <div className="flex flex-row gap-2">
                        <div className="mt-6">
                          <TextField required label="Phone Number" value={phone ? phone : localStorage.phone} onChange={(e) => setPhone(e.target.value)} variant="standard" color="primary" />
                        </div>
                      </div>
                    </FormControl>
                  </div>

                  <div className="flex flex-col w-3/6 px-6">
                    <div className="font-bold mb-2">Biodata</div>
                    <FormControl>
                      <label for="standard-password-input text-xxs">Fullname</label>
                      <TextField required id="standard-password-input" type="text" autoComplete="current-password" variant="standard" value={fullname ? fullname : localStorage.fullname} onChange={(e) => setFullname(e.target.value)} />

                      <label for="standard-password-input text-xxs" className="mt-4">
                        City
                      </label>
                      <TextField required id="standard-password-input" type="text" autoComplete="current-password" variant="standard" value={city ? city : localStorage.city} onChange={(e) => setCity(e.target.value)} />

                      <div className="flex flex-row">
                        <label for="standard-password-input text-xxs" className="mt-4">
                          Nationality Code
                        </label>
                        <span className="text-xs flex items-end pb-1 ms-1 font-bold">&#40;example: Indonesia = IDN&#41;</span>
                      </div>
                      <TextField
                        required
                        id="standard-password-input"
                        type="text"
                        autoComplete="current-password"
                        variant="standard"
                        value={nationality ? nationality : localStorage.nationality}
                        onChange={(e) => setNationality(e.target.value)}
                      />

                      <label for="standard-password-input text-xxs" className="mt-4">
                        Address
                      </label>
                      <TextField required id="standard-password-input" type="text" autoComplete="current-password" variant="standard" value={address ? address : localStorage.address} onChange={(e) => setAddress(e.target.value)} />

                      <label for="standard-password-input text-xxs" className="mt-4">
                        Post Code
                      </label>
                      <TextField required id="standard-password-input" type="text" autoComplete="current-password" variant="standard" value={postcode ? postcode : localStorage.postcode} onChange={(e) => setPostcode(e.target.value)} />
                    </FormControl>

                    <div className="flex justify-end">
                      <div className="flex flex-row gap-4">
                      <button onClick={handleOpen} className="my-8 rounded-lg text-sm sm:text-base font-semibold py-3 px-12 shadow-lg shadow-blue-500/50" style={{ backgroundColor: "#2395FF", color: "white" }}>
                        Save
                      </button>
                        {loading && <CircularProgress className="my-10"/>}
                      </div>
                      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                            Update Alert
                          </Typography>
                          <Typography id="modal-modal-description" className="font-bold" sx={{ mt: 2 }}>
                            After updating you will automatically logout, continue?
                          </Typography>
                          <div className="flex flex-row justify-center gap-6 mt-4">
                          <button onClick={handleClose} className="bg-red-400 text-white py-2 px-10 font-bold border-2 border-black">No</button>
                          <button onClick={updateUser} className="bg-green-400 text-white py-2 px-10 font-bold border-2 border-black">Yes</button>
                          </div>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#F5F6FA", paddingTop: 100 }}></div>

      <Footer />
    </>
  );
}

export default MyProfile;
