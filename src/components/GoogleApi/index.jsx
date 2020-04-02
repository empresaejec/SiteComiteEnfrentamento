import React, {Component} from 'react'

import ReactGoogleSheets from 'react-google-sheets';
 
 
class DataComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sheetLoaded: false,
    }
  }
  render() {
    return (
      <ReactGoogleSheets 
        clientId='590156982259-8t6fo29u668jg61l638enj6uqi1ft9cr.apps.googleusercontent.com'
        apiKey='-J5Ws3tCAWaswlXG2TRWB18b'
        spreadsheetId="183xb0KMRY6Inxb15im0p7PNDT4Csk1pymuLEBQJVVts"
        afterLoading={() => this.setState({sheetLoaded: true})}
      >
        {this.state.sheetLoaded ? 
          <div>
            {/* Access Data */}
            {console.log('Your sheet data : ', this.props.getSheetsData('Comite enfrentamento covid19'))}
            {/* Update Data */}
            <button onClick={() => {
              this.props.updateCell(
                'sheet01', // sheetName
                'E', // column
                13, // row
                'Apple', // value
                null, // successCallback
                (error) => {
                  console.log('error', error)
                } // errorCallback
              );
            }}>update cell!</button>
          </div>
          :
          'loading...'
        }
      </ReactGoogleSheets>
    )
  }
}
 
export default ReactGoogleSheets.connect(DataComponent);