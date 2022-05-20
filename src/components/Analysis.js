import '../styles/Analysis.css'
import confusion_matrix from '../assets/images/confusion_matrix.png';
import sentiment_by_month from '../assets/images/sentiment_by_month.png';
import negative_wordcloud from '../assets/images/negative_wordcloud.png';
import positive_wordcloud from '../assets/images/positive_wordcloud.png';

const Analysis = () => {
    return(
        <div className="Analysis">
            <div className="AnalysisContent">
                <div className="CardLayout">
                    <div className="AnalysisFigure">
                        <img src={sentiment_by_month} alt="sentiment by month"/>
                        <p>
                            Counts of positive and negative historical red tide
                            tweets grouped by months. These sentiment
                            predictions were made using Logistic Regression from
                            the NLTK python package.
                        </p>
                    </div>
                    <div className="AnalysisFigure">
                        <img src={confusion_matrix} alt="confusion matrix"/>
                        <p>
                            Detection rates of NLTK Logistic Regression model
                            trained on the Sentiment140 tweet dataset. The
                            Sentiment140 dataset consists of 800,000 positive
                            sentiment tweets and 800,000 negative sentiment
                            tweets.
                        </p>
                    </div>
                    <div className="AnalysisFigure">
                        <img src={positive_wordcloud} alt="positive wordcloud"/>
                        <p>One thousand words from historical red tide tweets labeled as positive sentiment sized by frequency.</p>
                    </div>
                    <div className="AnalysisFigure">
                        <img src={negative_wordcloud} alt="negative wordcloud"/>
                        <p>One thousand words from historical red tide tweets labeled as negative sentiment sized by frequency.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analysis;