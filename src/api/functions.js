import { AxiosBase } from ".";

function getToken() {
  return localStorage.getItem("token");
}

const headerToken = () => ({
  headers: {
    "x-access-token": getToken(),
  },
});

export const loginUser = (data) => AxiosBase.post("/auth/login", data);

export const myProfile = (token) =>
  AxiosBase.get("/auth/my-profile", headerToken());

export const getAllPatients = () =>
  AxiosBase.post("/patient/all-patients", {}, headerToken());

export const getDashboardCounts = (get) =>
  AxiosBase.get(`/dashboard/${get}`, headerToken());

export const getPatientId = () =>
  AxiosBase.post("/patient/pid", {}, headerToken());

export const getUtilities = (endpoint) =>
  AxiosBase.get(`/utilities/${endpoint}`, headerToken());

export const addPatient = (data) =>
  AxiosBase.post("/patient/new-patient", data, headerToken());

export const getAppointments = () =>
  AxiosBase.get("/appointments/list", headerToken());

export const getAllSpecialist = () =>
  AxiosBase.get("/utilities/specialists", headerToken());

export const getAllSpeciality = () =>
  AxiosBase.get("/utilities/specialities", headerToken());

export const newSpecialist = (data) =>
  AxiosBase.post("/utilities/create-specialist", data, headerToken());

export const updateSpecialist = (data) =>
  AxiosBase.patch(`/utilities/update-util`, data, headerToken());

export const deleteSpecialist = (id) =>
  AxiosBase.delete(`/utilities/delete-specialist/${id}`, headerToken());

export const addUtil = (data, endpoint) =>
  AxiosBase.post(`/utilities/${endpoint}`, data, headerToken());

export const getDashboarddList = (endpoint) =>
  AxiosBase.get(`/dashboard/${endpoint}`, headerToken());

export const createAppointment = (data, type, status) =>
  AxiosBase.post(
    `/appointments/create-appointment/${type}/${status}`,
    data,
    headerToken()
  );

export const updateAppointment = (data) =>
  AxiosBase.patch(
    `/appointments/update/${data?._id}`,
    data.appointment,
    headerToken()
  );
