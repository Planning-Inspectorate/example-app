import dayjs from 'dayjs';

const getFormattedDate = (timestamp) => {
    return timestamp ? dayjs(timestamp).format('DD/MM/YYYY') : '';
};

export default getFormattedDate;