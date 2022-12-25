const fetchData = {
    getAllStudents: async () => {
        await axios.get('http://localhost:8080/student/getallstudent')
        .then((res) => {
            localStorage.setItem('allstudent_data', JSON.stringify(res.data));
        })
    }
}
fetchData.getAllStudents()
