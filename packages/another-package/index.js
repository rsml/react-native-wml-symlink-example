import moment from 'moment';

module.exports = ({
  hello: () => {
    alert(`world ${moment()}`);
  }
});