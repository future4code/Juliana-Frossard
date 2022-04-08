export const goToMainPage = (navigate) => {
    navigate('/')
};
export const goToDetailPage = (navigate, id) => {
    navigate(`/movie-detail/${id}`)
};
export const goBack = (navigate) => {
    navigate(-1)
};