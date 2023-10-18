import classes from './Pop.module.css';

function Pop({ message, amount, showPop }) {
  return (
    <>
      <div className={`${classes.pop}`}>
        <div className={classes.container}>
          <h4 className={classes.header}>
            To Complete the transaction Please send:
          </h4>
          <p>
            <b>{showPop ? 'Binance E-mail :' : 'Amount : '} </b>
            {showPop ? 'rubbensonly@gmail.com' : amount }
          </p>
          <p>
            {!showPop && (
              <div>
                <p>
                  <b>Name : </b> BOISGUENE OLSON
                </p>
                <p>
                  <b>Phone : </b> 01552271
                </p>
                <b>MTC : {message} </b>
              </div>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Pop;
