# To Dos

## Dev&Test:
  - Dev:
    - [ ] Some kind of logging in/ auth
      - [ ] Login and Register page (Don't do verification yet)
      - [ ] Login with email, google and microsoft
      - [ ] Only show admin in navbar when admin logged in
      - [ ] account updates: Password reset, email change (do this after email integration)
    - [ ] Manage account / settings drop down
      - [ ] Move theme switcher to this
      - [ ] Link to 'View plan' or 'Subscription'
      - [ ] Link to view payment methods (need stripe integration)
    - [ ] Payments (Stripe or something else)
    - [ ] Emails on signup and other notis (Supabase has something for this)
  - Testing:
    - [ ] add a set of multiple choices questions test data
    - [ ] write a script tp populate test data to supabase on load potensh (probs in supabase/seed.sql)
    - [ ] add unit testing with jest
    - [ ] add integration and e2e testing with cypress