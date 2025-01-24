const getTaskDeadlineDateInput = ({ 'task-deadline-day': day, 'task-deadline-month': month, 'task-deadline-year': year }) => {
    return day && month && year ? `${year}-${month}-${day} 00:00:00` : null;
};

export default getTaskDeadlineDateInput;