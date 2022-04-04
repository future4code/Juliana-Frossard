export const goToMainPage = (navigate) => {
    navigate('/')
};
export const goToDeatilPage = (navigate, id) => {
    navigate(`/movie-detail/${id}`)
};