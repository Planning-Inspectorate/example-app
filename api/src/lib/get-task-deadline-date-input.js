const getTaskDeadlineDateInput = ({ 'task-deadline-day': day, 'task-deadline-month': month, 'task-deadline-year': year }) => {

    if (day && month && year) {
        return `${year}-${month}-${day}`;
    } else {
        return null;
    }
};

export default getTaskDeadlineDateInput;