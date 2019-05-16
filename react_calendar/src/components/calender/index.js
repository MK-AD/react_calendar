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
        showYearPopup: false,
        displayAddEvent: false,
        data: [
            {ig: '31a89b20-77da-11e9-b10b-e5acc7269da7', id: 2, title: 'Lisa - Raum 4', year: '2019', month: '5', content: 'You can install React from npm.' , prio: 'Lisa' , type:'event'},
            {ig: '31a89b20-3aft-11e9-b10b-e5acc7269sa7', id: 2, title: 'Marie - Raum 3',year: '2019', month: '5', content: 'You can install React from npm.' , prio: 'Marie' , type:'event'},
            {ig: '31a89b20-saf3-11e9-b10b-e5acc7269da7', id: 5, title: 'Marie - Raum 3',year: '2019', month: '5', content: 'You can install React from npm.' , prio: 'Marie' , type:'event'},
            {ig: '31a89b20-77da-11e9-b10b-e5acc7269da7', id: 5, title: 'Anna - Raum 2',year: '2019', month: '5', content: 'Welcome to learning React!', prio: 'Anna' , type:'event'},
            {ig: '31a89b20-77da-assf-b10b-e5acc7269da7', id: 10, title: 'Anna - Raum 2',year: '2019', month: '5', content: 'Welcome to learning React!', prio: 'Anna' , type:'event'},
            {ig: '31a89b20-xxva-a4af-b10b-e5acc7269da7', id: 14, title: 'Lisa - Raum 4',year: '2019', month: '5', content: 'Welcome to learning React!', prio: 'Lisa' , type:'event'},
            {ig: '31a89b20-2eav-11e9-sdas-e5acc7269da7', id: 14, title: 'Anna - Telefon',year: '2019', month: '5', content: 'Welcome to learning React!', prio: 'Anna' , type:'event'},
            {ig: '31a89b20-ba5a-11e9-b10b-e5acc7269da7', id: 17, title: 'Anna - Telefon',year: '2019', month: '5', content: 'Welcome to learning React!', prio: 'Anna' , type:'event'},
            {ig: '31a89b20-bvs4-11e9-b10b-e5acc7269da7', id: 23, title: 'Marie - Raum 3',year: '2019', month: '5', content: 'You can install React from npm.' , prio: 'Marie' , type:'event'},

            {ig: '31a89b20-77da-gass-10b-e5acc7269da7', id: 3, title: 'Marie - Raum 4', year: '2019', month: '4', content: 'You can install React from npm.' , prio: 'Marie' , type:'event'},
            {ig: '31a89b20-77da-axav-b10b-e5acc7269da7', id: 5, title: 'Marie - Raum 3',year: '2019', month: '4', content: 'You can install React from npm.' , prio: 'Marie' , type:'event'},
            {ig: '31a89b20-77da-11e9-sdaf-e5acc7269da7', id: 5, title: 'Anna - Raum 1',year: '2019', month: '4', content: 'You can install React from npm.' , prio: 'Anna' , type:'event'},
            {ig: '31a89b20-77da-11e9-vcxg-e5acc7269da7', id: 5, title: 'Lisa - Raum 2',year: '2019', month: '4', content: 'Welcome to learning React!', prio: 'Lisa' , type:'event'},
            {ig: '31a89b20-77da-11e9-ncvg-e5acc7269da7', id: 8, title: 'Anna - Raum 3',year: '2019', month: '4', content: 'You can install React from npm.' , prio: 'Anna' , type:'event'},
            {ig: '31a89b20-77da-11e9-fdg4-e5acc7269da7', id: 11, title: 'Marie - Raum 2',year: '2019', month: '4', content: 'Welcome to learning React!', prio: 'Marie' , type:'event'},
            {ig: '31a89b20-77da-11e9-se5z-e5acc7269da7', id: 19, title: 'Lisa - Raum 4',year: '2019', month: '4', content: 'Welcome to learning React!', prio: 'Lisa' , type:'event'},
            {ig: '31a89b20-77da-fsd6-b10b-e5acc7269da7', id: 23, title: 'Marie - Telefon',year: '2019', month: '4', content: 'Welcome to learning React!', prio: 'Marie' , type:'event'},
            {ig: '31a89b20-77da-11e9-fsd4-e5acc7269da7', id: 25, title: 'Marie - Telefon',year: '2019', month: '4', content: 'Welcome to learning React!', prio: 'Marie' , type:'event'},
            {ig: '31a89b20-77da-356g-dsfg-e5acc7269da7', id: 28, title: 'Anna - Raum 3',year: '2019', month: '4', content: 'You can install React from npm.' , prio: 'Anna' , type:'event'},
        ],

    }

    constructor(props) {
        super(props);
        this.width = props.width || "500px";
        this.style = props.style || {};
        this.style.width = this.width; // add this
    }

    weeknames = moment.weekdays();
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

    currentMonth = () => {
        return this.state.dateContext.format("M");
    };

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    };

    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <a href="#" onClick={(e) => {this.onSelectChange(e, data)}}><div className="month-overview" key={data}>
                    <a href="#" onClick={(e) => {this.onSelectChange(e, data)}}>
                        {data}
                    </a>
                </div></a>
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

    onAddEntryClick = (e, day, month, year) => {
        this.props.onAddEntryClick && this.props.onAddEntryClick(e, day, month, year);
        console.log("tt"+ this.props.entry_values.new_entry);
        /*
        let data_copy = this.state.data;
        data_copy.push(this.props.entry_values);
        this.setState({
            data: data_copy*/

    };

    WeekNames = () => {
        return (
            <div className="month-display label-month " onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                <this.SelectList data={this.months} />
                }
            </div>
        );
    };

    render() {

        let weeknames = this.weeknames.map((day) => {
            return (
                <th className="weekdays-td col-sm-2" key={day}>{day}</th>
            );
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="emptySlot col-sm-2">
                    {""}
                </td>
            );
        }

        let daysInMonth = [];

        /* Deal with the copy and the original data > this infinite loop ....
        let data_copy = this.state.data;
        data_copy.push(this.props.entry_values);
        this.setState({
            data: data_copy
        });*/

        for(let d = 1; d <= this.daysInMonth(); d++) {

            let className = (d == this.currentDay() ? "day current-day": "day");
            daysInMonth.push(
                <td className="col-sm-2" key={d} >
                    <div className={className}>{d}</div>
                    <div className="add-entry" onClick={(e) => {this.onAddEntryClick(e, d, this.currentMonth(), this.year())}}>+</div>
                    <div className="clear"/>
                    <hr/>
                    <div className="black">
                        {this.state.data.map(key => {
                            if (d === key.id && this.currentMonth() === key.month && this.year() === key.year) {
                                return (
                                    <div key={key.ig} className={[key.prio, key.type].join(" ")}> {key.title} </div>
                                );

                            }
                        })}
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
              <tr className="d-flex" key={i*100}>
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

                <div className="clear"/>
                <div className="table-responsive calender-body">
                    <table className="table">
                        <thead>
                            <tr className="d-flex calendar-header">
                                {weeknames}
                            </tr>
                        </thead>
                        <tbody>
                            {trElements}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}