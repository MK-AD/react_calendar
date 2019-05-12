import React from 'react';
import moment from 'moment';
import './calender.css'
import 'moment/locale/de'
moment.locale('de')

export default class Calender extends React.Component {
    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false
    }

    constructor(props) {
        super(props);
        this.width = props.width || "500px";
        this.style = props.style || {};
        this.style.width = this.width; // add this
    }

    weekdays = moment.weekdays();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    };

    month = () => {
        return this.state.dateContext.format("MMMM");
    };

    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    };

    currentDay = () => {
        return this.state.dateContext.format("D");
    };

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    };

    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e) => {this.onSelectChange(e, data)}}>
                        {data}
                    </a>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    };

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();
    };

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext)
        dateContext = moment(dateContext).set("month" , monthNo);
        this.setState({
            dateContext: dateContext
        });
    };

    MonthNav = () => {
        return (
            <div className="month-display label-month " onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                    <this.SelectList data={this.months} />
                }
            </div>
        );
    };

    onChangeMonth= (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    };

    YearNav = () => {
        return (
            this.state.showYearNav ? <input defaultValue = {this.year()}
                                            className="editor year-display"
                                            ref={(yearInput) => {this.yearInput = yearInput}}
                                            onKeyUp = {(e) => this.onKeyUpYear(e)}
                                            onChange = {(e) => this.onYearChange(e) }
                                            type="number"
                                            placeholder="year"/> :
            <div className="year-display"
                 onClick={(e) =>  {this.showYearEditor()}}>
                {this.year()}
            </div>
        );
    };

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    };

    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e);
    };

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    };

    onKeyUpYear = (e) => {
        if (e.which === 13  || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    };

    onAddEntryClick = (e, day) => {
        this.props.onAddEntryClick && this.props.onAddEntryClick(e, day);
    };

    render() {
        let weekdays = this.weekdays.map((day) => {
            return (
                <td className="weekdays-td" key={day}>{day}</td>
            );
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                    {""}
                </td>
            );
        }

        let daysInMonth = [];
        for(let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day": "day");
            daysInMonth.push(
                <td key={d} >
                    <div className={className}>{d}</div>
                    <div className="add-entry" onClick={(e) => {this.onAddEntryClick(e, d)}}>+</div>
                    <div className="clear"/>
                    <hr/>
                    <div className="black">
                        <ul>
                            <li>entry</li>
                            <li>entry</li>
                            <li>Test</li>
                        </ul>
                    </div>
                </td>
            )
        }

        var totalSlot = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlot.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }

            if (i === totalSlot.length -1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElements = rows.map((d, i) => {
           return (
              <tr key={i*100}>
                  {d}
              </tr>
           );
        });

        return(
            <div className="container">
                <div className="chooser-display">
                    <this.MonthNav />
                    <this.YearNav />
                </div>
                <div className="clear"/>
                <div className="calender-body">
                    <table className="table">
                        <thead>
                            <tr className="calendar-header">
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElements}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}