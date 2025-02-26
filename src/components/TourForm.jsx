export default function TourForm () {
    return (<form>
        <p>If you would like more information about our center you can set up a tour. Just fill out the following form:</p>
        <div>
            <div className="column">
                <input type="text" placeholder="First name"/>
            </div>
            <div className="column">
                <input type="text" placeholder="Last name" />
            </div>
        </div>
        <div>
            <div className="column">
                <input type="email" placeholder="E-mail" />
            </div>
            <div className="column">
                <input type="tel" placeholder="Phone"/>
            </div>
        </div>
        <div>
            <div className="column">
                <label htmlFor="age">Select Age Group
                    <select name="age">
                        <option value="">--Select option--</option>
                        <option value="Infants (6w-12m)">Infants not mobile (6wks-12months)</option>
                        <option value="Infants (10m-18m)">Infants mobile (12wks-18months)</option>
                        <option value="Toddlers (18m-30m)">Toddlers (18months-30months)</option>
                        <option value="Toddlers (30m-3y)">Toddlers (30months-3yrs)</option>
                        <option value="Preschool (3-4)">Preschool (3yrs-4yrs)</option>
                        <option value="Preschool (4-5)">Preschool (4yrs-5yrs)</option>
                        <option value="Before and After">Before and after school</option>
                        <option value="Days off">School's DayOff</option>
                        <option value="Summer camp">Summer Camp</option>
                    </select>
                </label>
            </div>
            <div>
                <label htmlFor="time"> Select time:
                    <select name="time">
                        <option value="">--Select option--</option>
                        <option value="full">Full day</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                    </select>
                </label>           
            </div>
        </div>

        <textarea name="" id="" cols="100" rows="10" placeholder="Additional comments"></textarea>
        <br />
        <button type="submit">SEND</button>
    </form> );
}