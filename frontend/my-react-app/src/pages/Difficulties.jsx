import React from "react";
import "../diff.css"

export default function Difficulties(){
    return ( 
        <>
        
        <h1 className="title">Assesment</h1>

        <form id="form-diff">

        <h1 title>Section 1: Interests</h1>

        <div className="form_control">
            <label className="question">
            1. How interested are you in solving complex mathematical problems?
            </label> 
            <label htmlFor="Male"><input type="radio" name="1"/>Not interested at all</label>
            <label htmlFor="Male"><input type="radio" name="1"/>Slightly interested</label>
            <label htmlFor="Male"><input type="radio" name="1"/>Moderately interested</label>
            <label htmlFor="Male"><input type="radio" name="1"/>Very interested</label>
            <label htmlFor="Male"><input type="radio" name="1"/>Extremely interested</label>
        </div>

        <div className="form_control">
            <label className="question">
            How do you feel about working in a team and collaborating with others?
            </label> 
            <label htmlFor="Male"><input type="radio" name="2"/>I prefer working alone</label>
            <label htmlFor="Male"><input type="radio" name="2"/>I'm somewhat comfortable working in a team</label>
            <label htmlFor="Male"><input type="radio" name="2"/>I'm moderately comfortable working in a team</label>
            <label htmlFor="Male"><input type="radio" name="2"/>I'm comfortable working in a team</label>
            <label htmlFor="Male"><input type="radio" name="2"/>I thrive in team settings</label>
        </div>

        <div className="form_control">
            <label className="question">
            3.Do you enjoy creative activities like writing, painting, or playing a musical instrument?
            </label> 
            <label htmlFor="Male"><input type="radio" name="3"/>Not at all</label>
            <label htmlFor="Male"><input type="radio" name="3"/>Slightly</label>
            <label htmlFor="Male"><input type="radio" name="3"/>Moderately</label>
            <label htmlFor="Male"><input type="radio" name="3"/>Very much</label>
            <label htmlFor="Male"><input type="radio" name="3"/>Refused</label>
            <label htmlFor="Male"><input type="radio" name="3"/>Extremely</label>
        </div>

        <div className="form_control">
            <label className="question">
            4.Are you interested in understanding human behavior, motivations, and emotions?
            </label> 
            <label htmlFor="Male"><input type="radio" name="3"/>Not interested</label>
            <label htmlFor="Male"><input type="radio" name="3"/>Slightly interested</label>
            <label htmlFor="Male"><input type="radio" name="3"/>Moderately interested</label>
            <label htmlFor="Male"><input type="radio" name="3"/>Very interested</label>
            <label htmlFor="Male"><input type="radio" name="3"/>Extremely interested</label>
        </div>

        <h1 title>Section 2: Strengths</h1>

        <div className="form_control">
            <label className="question">
            1.How would you rate your strengths as described by others?
            </label> 
            <label htmlFor="Male"><input type="radio" name="4"/>Very weak</label>
            <label htmlFor="Male"><input type="radio" name="4"/>Weak</label>
            <label htmlFor="Male"><input type="radio" name="4"/>Average</label>
            <label htmlFor="Male"><input type="radio" name="4"/>Strong</label>
            <label htmlFor="Male"><input type="radio" name="4"/>Very strong</label>
        </div>

        <div className="form_control">
            <label className="question">
            2.how do you typically handle challenges or setbacks in your life or work?
            </label> 
            <label htmlFor="Male"><input type="radio" name="5"/>Poorly </label>
            <label htmlFor="Male"><input type="radio" name="5"/>Somewhat poorly</label>
            <label htmlFor="Male"><input type="radio" name="5"/>Moderately</label>
            <label htmlFor="Male"><input type="radio" name="5"/>Effectively</label>
            <label htmlFor="Male"><input type="radio" name="5"/>Very effectively</label>
        </div>

        <div className="form_control">
            <label className="question">
            3.how would you rate the effectiveness of a specific accomplishment or project where you felt your skills and strengths were utilized? 
            </label> 
            <label htmlFor="Male"><input type="radio" name="6"/>Not effective at all</label>
            <label htmlFor="Male"><input type="radio" name="6"/>Slightly effective</label>
            <label htmlFor="Male"><input type="radio" name="6"/>Moderately effective</label>
            <label htmlFor="Male"><input type="radio" name="6"/>Very effective</label>
            <label htmlFor="Male"><input type="radio" name="6"/>Extremely effective</label>
        </div>


        <h1 title>Section 3: Values</h1>

        <div className="form_control">
            <label className="question">
            1.What motivates you the most in your career choice?
            </label> 
            <label htmlFor="Male"><input type="radio" name="8"/>Not motivated</label>
            <label htmlFor="Male"><input type="radio" name="8"/>Slightly motivated</label>
            <label htmlFor="Male"><input type="radio" name="8"/>Moderately motivated</label>
            <label htmlFor="Male"><input type="radio" name="8"/>Very motivated</label>
            <label htmlFor="Male"><input type="radio" name="8"/>Extremely motivated</label>
        </div>

        <div className="form_control">
            <label className="question">
            2.How important is work-life balance to you?
            </label> 
            <label htmlFor="Male"><input type="radio" name="9"/>Not important at all</label>
            <label htmlFor="Male"><input type="radio" name="9"/>Slightly important</label>
            <label htmlFor="Male"><input type="radio" name="9"/>Moderately important</label>
            <label htmlFor="Male"><input type="radio" name="9"/>Very important</label>
            <label htmlFor="Male"><input type="radio" name="9"/>Extremely important</label>
        </div>

        <div className="form_control">
            <label className="question">
            3.What values do you prioritize in your work environment? 
            </label> 
            <label htmlFor="Male"><input type="radio" name="10"/>Not important</label>
            <label htmlFor="Male"><input type="radio" name="10"/>Slightly important</label>
            <label htmlFor="Male"><input type="radio" name="10"/>Moderately important</label>
            <label htmlFor="Male"><input type="radio" name="10"/>Very important</label>
            <label htmlFor="Male"><input type="radio" name="10"/>Extremely important</label>
        </div>


        <div className="form_control">
            <label className="question">
            4. How important is financial stability and compensation in your career choices?
            </label> 
            <label htmlFor="Male"><input type="radio" name="9"/>Not important at all</label>
            <label htmlFor="Male"><input type="radio" name="9"/>Slightly important</label>
            <label htmlFor="Male"><input type="radio" name="9"/>Moderately important</label>
            <label htmlFor="Male"><input type="radio" name="9"/>Very important</label>
            <label htmlFor="Male"><input type="radio" name="9"/>Extremely important</label>
        </div>

        </form>
    </>
    )
}

