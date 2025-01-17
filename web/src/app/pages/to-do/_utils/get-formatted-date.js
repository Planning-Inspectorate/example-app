import dayjs from 'dayjs';

const getFormattedDate = (timestamp) => {
    if (timestamp) {
        return dayjs(timestamp).format('DD/MM/YYYY');
    } else {
        return '';
    }
};

export default getFormattedDate;