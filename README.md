# Student-Appointment-Request
Copy Google Calendar appointments to a spreadsheet

## Table of Contents
  * [Introduction](#introduction)
  * [Technologies](#technologies)
  * [Setup](#setup)
  * [Features](#features)

## Introduction
The county will never hire me a classroom administrative assistant for Christmas, so I am treating myself by automating my students' ownership of their learning. When they make a calendar appointment for remediation, this will paste the necessary details onto my school's request sheet and notify the student whether or not the request was successful.

## Technologies
#### Created with:
  * Apps Script (V8 runtime)

#### Requires:
  * Google Calendar
  * Google Sheets
  * Gmail

## Setup
#### To run this project:
  * Copy the script into a .gs project
  * Update the Calendar name & request sheet

#### The code assumes:
  * The students' email account don't have a "nickname" tag
  * The request sheet requires:
    * the teacher's last name, room, & subject
    * the student's name, ID, & class period

## Features
  * pull details from every event in a specific Google calendar
  * Identify the correct sheet &

#### To do
  * *Email notifaction of (un)successful request*
