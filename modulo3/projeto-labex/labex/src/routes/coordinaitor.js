export const goToHomePage = (navigate) => {
    navigate("/")
}
export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
}
export const goToAplicationFormPage = (navigate) => {
    navigate("/trips/application")
}
export const goToLoginPage = (navigate) => {
    navigate("/login")
}
export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}
export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}
export const goToTripDetailPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}
export const goBackPage = (navigate) => {
    navigate(-1)
}