Rails Forms & REST
==================

## SWBATs

* [x] Use path helpers and customize them.
* [ ] Distinguish between `form_for` vs `form_tag` based on use case.
* [-] Understand the need for strong params & CSRF tokens.
* [ ] Begin thinking about checking information before creating things.
* [x] Begin thinking about building a better UX - `link_to`, `button_to`, `button_tag`.

## Outline

Domain
=> storms => weather?
- victims
- flavor?? => type of storm
- name

rails generate model Storm victims:integer flavor name
rails g controller storms

rails g resource Storm victims:integer flavor name
- it's being nice and setting up your routes for you

1. New domain that extends to tomorrow.
  * `rails g resource ModelName column:type`
  * RESTful routes via `resources`, `only`, `except`
2. Build out `index`, `show`, `delete`.
  * Path Helpers, `rails routes`, custom path helpers
  * `<a>` vs `link_to`, `method: HTTP_Verb`
  * `button_to` vs `button_tag`
3. Build out `new`, `create`, `edit`, `update`.
  * `form_for` vs `form_tag`
  * CSRF Token
  * strong params
4. Extra Stuff:
  * Abstraction! Partials, `before_action`
