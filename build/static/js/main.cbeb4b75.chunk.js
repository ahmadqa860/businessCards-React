(this["webpackJsonpreal-app"] = this["webpackJsonpreal-app"] || []).push([
  [0],
  {
    17: function (e) {
      e.exports = JSON.parse('{"a":"http://localhost:3900/api"}');
    },
    34: function (e, a, t) {},
    43: function (e, a, t) {},
    44: function (e, a, t) {},
    48: function (e, a, t) {
      e.exports = t(86);
    },
    53: function (e, a, t) {},
    54: function (e, a, t) {},
    55: function (e, a, t) {},
    81: function (e, a, t) {},
    86: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        l = t(21),
        s = t.n(l),
        c = (t(53), t(5)),
        i = t(6),
        o = t(8),
        m = t(7),
        u = t(9),
        d = (t(54), t(3)),
        p =
          (t(55),
          (function (e) {
            function a() {
              var e, t;
              Object(c.a)(this, a);
              for (
                var n = arguments.length, r = new Array(n), l = 0;
                l < n;
                l++
              )
                r[l] = arguments[l];
              return (
                ((t = Object(o.a)(
                  this,
                  (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
                )).state = {}),
                t
              );
            }
            return (
              Object(u.a)(a, e),
              Object(i.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.user;
                    return r.a.createElement(
                      "nav",
                      {
                        className:
                          "navbar navbar-expand-lg navbar-light shadow-sm",
                      },
                      r.a.createElement(
                        "div",
                        { className: "container" },
                        r.a.createElement(
                          d.b,
                          { className: "navbar-brand", to: "/" },
                          "Business Cards WebApp"
                        ),
                        r.a.createElement(
                          "button",
                          {
                            className: "navbar-toggler",
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navbarNav",
                            "aria-controls": "navbarNav",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                          },
                          r.a.createElement("span", {
                            className: "navbar-toggler-icon",
                          })
                        ),
                        r.a.createElement(
                          "div",
                          {
                            className: "collapse navbar-collapse",
                            id: "navbarNav",
                          },
                          r.a.createElement(
                            "ul",
                            { className: "navbar-nav ml-auto" },
                            !e &&
                              r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(
                                  "li",
                                  { className: "nav-item", key: "1" },
                                  r.a.createElement(
                                    d.c,
                                    {
                                      className: "nav-item nav-link ",
                                      to: "/signin",
                                    },
                                    "Signin"
                                  )
                                ),
                                r.a.createElement(
                                  "li",
                                  { className: "nav-item", key: "2" },
                                  r.a.createElement(
                                    d.c,
                                    {
                                      className: "nav-item nav-link",
                                      to: "/signup",
                                    },
                                    "Signup"
                                  )
                                ),
                                r.a.createElement(
                                  "li",
                                  { className: "nav-item", key: "3" },
                                  r.a.createElement(
                                    d.c,
                                    {
                                      className: "nav-item nav-link a-link",
                                      to: "/biz-signup",
                                    },
                                    "Business"
                                  )
                                )
                              ),
                            e &&
                              r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(
                                  "ul",
                                  { className: "nav-item dropdown", key: "5" },
                                  r.a.createElement(
                                    d.b,
                                    {
                                      className: "nav-link dropdown-toggle",
                                      id: "navbarDropdownMenuLink",
                                      "data-toggle": "dropdown",
                                      "aria-haspopup": "true",
                                      "aria-expanded": "false",
                                      to: "#",
                                    },
                                    r.a.createElement(
                                      "span",
                                      { className: "mr-2" },
                                      e.name
                                    ),
                                    r.a.createElement("i", {
                                      className: "fas fa-user",
                                    })
                                  ),
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "dropdown-menu dropdown-primary",
                                      "aria-labelledby":
                                        "navbarDropdownMenuLink",
                                    },
                                    e &&
                                      e.biz &&
                                      r.a.createElement(
                                        "li",
                                        { className: "nav-item" },
                                        r.a.createElement(
                                          d.b,
                                          {
                                            className: "dropdown-item",
                                            to: "/my-cards",
                                          },
                                          "My Cards"
                                        )
                                      ),
                                    r.a.createElement(
                                      "li",
                                      { className: "nav-item" },
                                      r.a.createElement(
                                        d.c,
                                        {
                                          className: "dropdown-item",
                                          to: "/logout",
                                        },
                                        "Logout"
                                      )
                                    )
                                  )
                                )
                              )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        b = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "container text-center text-md-left" },
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "div",
                  { className: "col-md-4 mx-auto" },
                  r.a.createElement(
                    "h5",
                    { className: "font-weight-bold text-uppercase mt-3 mb-4" },
                    "Visitor"
                  ),
                  r.a.createElement(
                    "h6",
                    null,
                    "Sign in to our site and get all the Business Cards that you need, our service is to connect you for all your needs"
                  )
                ),
                r.a.createElement("hr", {
                  className: "clearfix w-100 d-md-none",
                }),
                r.a.createElement(
                  "div",
                  { className: "col-md-4 mx-auto" },
                  r.a.createElement(
                    "h5",
                    { className: "font-weight-bold text-uppercase mt-3 mb-4" },
                    "Business User"
                  ),
                  r.a.createElement(
                    "h6",
                    null,
                    "In our site you can manage your Business Card, also you can share your card with others, Open a new account as business and start, you can add, edit, and send your cards for other users"
                  )
                ),
                r.a.createElement("hr", {
                  className: "clearfix w-100 d-md-none",
                })
              )
            ),
            r.a.createElement("hr", null),
            r.a.createElement(
              "ul",
              { className: "list-unstyled list-inline text-center py-2" },
              r.a.createElement(
                "li",
                { className: "list-inline-item" },
                r.a.createElement(
                  "h5",
                  { className: "mb-1" },
                  "Register for free"
                )
              ),
              r.a.createElement(
                "li",
                { className: "list-inline-item" },
                r.a.createElement(
                  d.b,
                  { to: "/signup", className: "btn btn-danger btn-rounded" },
                  "Sign up!"
                )
              )
            ),
            r.a.createElement("hr", null),
            r.a.createElement(
              "ul",
              { className: "list-unstyled list-inline text-center" },
              r.a.createElement(
                "li",
                { className: "list-inline-item" },
                r.a.createElement(
                  d.b,
                  { to: "#", className: "btn-floating btn-fb mx-1" },
                  r.a.createElement(
                    "i",
                    { className: "fab fa-facebook-f" },
                    " "
                  )
                )
              ),
              r.a.createElement(
                "li",
                { className: "list-inline-item" },
                r.a.createElement(
                  d.b,
                  { to: "#", className: "btn-floating btn-tw mx-1" },
                  r.a.createElement("i", { className: "fab fa-twitter" }, " ")
                )
              ),
              r.a.createElement(
                "li",
                { className: "list-inline-item" },
                r.a.createElement(
                  d.b,
                  { to: "#", className: "btn-floating btn-gplus mx-1" },
                  r.a.createElement(
                    "i",
                    { className: "fab fa-google-plus-g" },
                    " "
                  )
                )
              ),
              r.a.createElement(
                "li",
                { className: "list-inline-item" },
                r.a.createElement(
                  d.b,
                  { to: "#", className: "btn-floating btn-li mx-1" },
                  r.a.createElement(
                    "i",
                    { className: "fab fa-linkedin-in" },
                    " "
                  )
                )
              ),
              r.a.createElement(
                "li",
                { className: "list-inline-item" },
                r.a.createElement(
                  d.b,
                  { to: "#", className: "btn-floating btn-dribbble mx-1" },
                  r.a.createElement("i", { className: "fab fa-dribbble" }, " ")
                )
              )
            ),
            r.a.createElement(
              "div",
              { className: "footer-copyright text-center py-3" },
              "\xa9 2020 Copyright:"
            )
          );
        },
        h =
          (t(34),
          (function (e) {
            function a() {
              var e, t;
              Object(c.a)(this, a);
              for (
                var n = arguments.length, r = new Array(n), l = 0;
                l < n;
                l++
              )
                r[l] = arguments[l];
              return (
                ((t = Object(o.a)(
                  this,
                  (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
                )).state = {}),
                t
              );
            }
            return (
              Object(u.a)(a, e),
              Object(i.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      "div",
                      { className: "container" },
                      r.a.createElement(
                        "div",
                        { className: "jumbotron p-4 p-md-5 rounded mt-4" },
                        r.a.createElement(
                          "div",
                          { className: "col-md-6 px-0 " },
                          r.a.createElement(
                            "h1",
                            { className: "display-4 font-italic" },
                            "Welcome to Our Web App Business Cards"
                          ),
                          r.a.createElement(
                            "p",
                            { className: "lead my-3" },
                            "Our site gives you the opportunity to promote your business in online advertising, are you a business owner? Register the business card in a business account and interested customers will contact you."
                          ),
                          r.a.createElement("p", { className: "lead mb-0" })
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        f = t(10),
        E = t.n(f),
        v = t(11),
        g = function (e) {
          var a = e.titleText;
          return r.a.createElement(
            "div",
            { className: "row" },
            r.a.createElement(
              "div",
              { className: "col-12 mt-4" },
              r.a.createElement("h1", null, a)
            )
          );
        },
        y = t(4),
        N = t.n(y),
        w = t(30),
        O = t(24),
        j = t(26),
        x = function (e) {
          var a = e.name,
            t = e.label,
            n = e.error,
            l = Object(j.a)(e, ["name", "label", "error"]);
          return r.a.createElement(
            "div",
            null,
            t && r.a.createElement("label", { htmlFor: a }, t),
            r.a.createElement(
              "input",
              Object.assign({}, l, { name: a, id: a })
            ),
            n && r.a.createElement("span", { className: "text-danger" }, n)
          );
        },
        k = (function (e) {
          function a() {
            var e, t;
            Object(c.a)(this, a);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
              )).state = { data: {}, errors: {} }),
              (t.validate = function () {
                var e = N.a.validate(t.state.data, t.schema, { abortEarly: !1 })
                  .error;
                if (!e) return null;
                var a = {},
                  n = !0,
                  r = !1,
                  l = void 0;
                try {
                  for (
                    var s, c = e.details[Symbol.iterator]();
                    !(n = (s = c.next()).done);
                    n = !0
                  ) {
                    var i = s.value;
                    a[i.path[0]] = i.message;
                  }
                } catch (o) {
                  (r = !0), (l = o);
                } finally {
                  try {
                    n || null == c.return || c.return();
                  } finally {
                    if (r) throw l;
                  }
                }
                return a;
              }),
              (t.validateProperty = function (e) {
                var a = e.name,
                  n = e.value,
                  r = Object(O.a)({}, a, n),
                  l = Object(O.a)({}, a, t.schema[a]),
                  s = N.a.validate(r, l).error;
                return s ? s.details[0].message : null;
              }),
              (t.handleSubmit = function (e) {
                e.preventDefault();
                var a = t.validate();
                console.log(a),
                  t.setState({ errors: a || {} }),
                  a || t.doSubmit();
              }),
              (t.handleChange = function (e) {
                var a = e.currentTarget,
                  n = Object(w.a)({}, t.state.errors),
                  r = t.validateProperty(a);
                r ? (n[a.name] = r) : delete n[a.name];
                var l = Object(w.a)({}, t.state.data);
                (l[a.name] = a.value), t.setState({ data: l, errors: n });
              }),
              t
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "renderButton",
                value: function (e) {
                  return r.a.createElement(
                    "button",
                    { disabled: this.validate() },
                    e
                  );
                },
              },
              {
                key: "renderSubmitButton",
                value: function (e) {
                  return r.a.createElement("input", {
                    type: "submit",
                    disabled: this.validate(),
                    value: e,
                  });
                },
              },
              {
                key: "renderInput",
                value: function (e) {
                  var a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    t =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "text",
                    n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : "",
                    l = this.state,
                    s = l.data,
                    c = l.errors;
                  return r.a.createElement(x, {
                    type: t,
                    name: e,
                    value: s[e],
                    label: a,
                    onChange: this.handleChange,
                    error: c[e],
                    placeholder: n,
                  });
                },
              },
            ]),
            a
          );
        })(n.Component),
        C = t(20),
        z = t.n(C),
        S = t(16),
        I = t(17),
        A = t(47),
        B = t.n(A);
      function P() {
        return (P = Object(v.a)(
          E.a.mark(function e(a, t) {
            var n, r;
            return E.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      T.post("".concat(I.a, "/auth"), { email: a, password: t })
                    );
                  case 2:
                    (n = e.sent),
                      (r = n.data),
                      localStorage.setItem("token", r.token);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var D = {
        login: function (e, a) {
          return P.apply(this, arguments);
        },
        getCurrentUser: function () {
          try {
            var e = localStorage.getItem("token");
            return B()(e);
          } catch (a) {
            return null;
          }
        },
        logout: function () {
          localStorage.removeItem("token");
        },
        getJwt: function () {
          return localStorage.getItem("token");
        },
      };
      (z.a.defaults.headers.common["x-auth-token"] = D.getJwt()),
        z.a.interceptors.response.use(null, function (e) {
          return (
            e.response &&
              e.response.status >= 403 &&
              S.b.error("An unexpected error occurrred."),
            Promise.reject(e)
          );
        });
      var T = {
          get: z.a.get,
          post: z.a.post,
          put: z.a.put,
          patch: z.a.patch,
          delete: z.a.delete,
        },
        _ = t(19),
        q = (t(43), t(22)),
        M = t.n(q);
      M()("#login-button").click(function (e) {
        e.preventDefault(),
          M()("form").fadeOut(500),
          M()(".wrapper").addClass("form-success");
      });
      var L = (function (e) {
          function a() {
            var e, t;
            Object(c.a)(this, a);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
              )).state = {
                data: { email: "", password: "", name: "" },
                errors: {},
              }),
              (t.schema = {
                email: N.a.string().required().email().label("Email"),
                password: N.a.string().required().min(6).label("Password"),
                name: N.a.string().required().min(2).label("Name"),
              }),
              (t.doSubmit = Object(v.a)(
                E.a.mark(function e() {
                  var a;
                  return E.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              ((a = t.state.data).biz = !1),
                              (e.prev = 2),
                              (e.next = 5),
                              T.post("".concat(I.a, "/users"), a)
                            );
                          case 5:
                            Object(S.b)("A new acoount is opened"),
                              t.props.history.replace("/signin"),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(2)),
                              e.t0.response &&
                                400 === e.t0.response.status &&
                                t.setState({
                                  errors: { email: "Email is taken" },
                                });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 9]]
                  );
                })
              )),
              t
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  return D.getCurrentUser()
                    ? r.a.createElement(_.a, { to: "/" })
                    : r.a.createElement(
                        "div",
                        { className: "wrapper rounded" },
                        r.a.createElement(
                          "div",
                          { className: "Lcontainer" },
                          r.a.createElement(g, {
                            titleText: "Sign Up For a Better experience",
                          }),
                          r.a.createElement(
                            "form",
                            {
                              onSubmit: this.handleSubmit,
                              autoComplete: "off",
                              method: "POST",
                              className: "Lform",
                            },
                            this.renderInput("email", "", "email", "Email"),
                            this.renderInput(
                              "password",
                              "",
                              "password",
                              "Password"
                            ),
                            this.renderInput("name", "", "", "Name"),
                            this.renderButton("Signup")
                          )
                        ),
                        r.a.createElement(
                          "ul",
                          { className: "bg-bubbles" },
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null)
                        )
                      );
                },
              },
            ]),
            a
          );
        })(k),
        U = (function (e) {
          function a() {
            var e, t;
            Object(c.a)(this, a);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
              )).state = { data: { email: "", password: "" }, errors: {} }),
              (t.schema = {
                email: N.a.string().required().email().label("Email"),
                password: N.a.string().required().min(6).label("Password"),
              }),
              (t.doSubmit = Object(v.a)(
                E.a.mark(function e() {
                  var a, n, r;
                  return E.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.state.data),
                              (n = a.email),
                              (r = a.password),
                              (e.prev = 1),
                              (e.next = 4),
                              D.login(n, r)
                            );
                          case 4:
                            (window.location = "/"), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(1)),
                              e.t0.response &&
                                400 === e.t0.response.status &&
                                t.setState({
                                  errors: { email: e.t0.response.data },
                                });
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 7]]
                  );
                })
              )),
              t
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  return D.getCurrentUser()
                    ? r.a.createElement(_.a, { to: "/" })
                    : r.a.createElement(
                        "div",
                        { className: "wrapper rounded" },
                        r.a.createElement(
                          "div",
                          { className: "Lcontainer" },
                          r.a.createElement(g, {
                            titleText: "Welcome To Our Card Web App",
                          }),
                          r.a.createElement(
                            "form",
                            {
                              onSubmit: this.handleSubmit,
                              autoComplete: "off",
                              method: "POST",
                              className: "Lform",
                            },
                            this.renderInput("email", "", "email", "Email"),
                            this.renderInput(
                              "password",
                              "",
                              "password",
                              "Password"
                            ),
                            this.renderButton("Signin")
                          ),
                          r.a.createElement(
                            "ul",
                            { className: "bg-bubbles" },
                            r.a.createElement("li", null),
                            r.a.createElement("li", null),
                            r.a.createElement("li", null),
                            r.a.createElement("li", null),
                            r.a.createElement("li", null),
                            r.a.createElement("li", null),
                            r.a.createElement("li", null),
                            r.a.createElement("li", null),
                            r.a.createElement("li", null),
                            r.a.createElement("li", null)
                          )
                        )
                      );
                },
              },
            ]),
            a
          );
        })(k),
        F = (function (e) {
          function a() {
            return (
              Object(c.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  D.logout(), (window.location = "/");
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            a
          );
        })(n.Component),
        W = (function (e) {
          function a() {
            var e, t;
            Object(c.a)(this, a);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
              )).state = {
                data: { email: "", password: "", name: "" },
                errors: {},
              }),
              (t.schema = {
                email: N.a.string().required().email().label("Email"),
                password: N.a.string().required().min(6).label("Password"),
                name: N.a.string().required().min(2).label("Name"),
              }),
              (t.doSubmit = Object(v.a)(
                E.a.mark(function e() {
                  var a;
                  return E.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              ((a = t.state.data).biz = !0),
                              (e.prev = 2),
                              (e.next = 5),
                              T.post("".concat(I.a, "/users"), a)
                            );
                          case 5:
                            return (e.next = 7), D.login(a.email, a.password);
                          case 7:
                            (window.location = "/create-card"), (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(2)),
                              e.t0.response &&
                                400 === e.t0.response.status &&
                                t.setState({
                                  errors: { email: "Email is taken" },
                                });
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 10]]
                  );
                })
              )),
              t
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  return D.getCurrentUser()
                    ? r.a.createElement(_.a, { to: "/" })
                    : r.a.createElement(
                        "div",
                        { className: "wrapper rounded" },
                        r.a.createElement(
                          "div",
                          { className: "Lcontainer" },
                          r.a.createElement(g, {
                            titleText: "Business Registration Form",
                          }),
                          r.a.createElement(
                            "form",
                            {
                              onSubmit: this.handleSubmit,
                              autoComplete: "off",
                              method: "POST",
                              className: "Lform",
                            },
                            this.renderInput("email", "", "email", "Email"),
                            this.renderInput(
                              "password",
                              "",
                              "password",
                              "Password"
                            ),
                            this.renderInput("name", "", "", "Name"),
                            this.renderButton("Next")
                          )
                        ),
                        r.a.createElement(
                          "ul",
                          { className: "bg-bubbles" },
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null),
                          r.a.createElement("li", null)
                        )
                      );
                },
              },
            ]),
            a
          );
        })(k);
      var J = {
          createCard: function (e) {
            return T.post("".concat(I.a, "/cards"), e);
          },
          getMyCards: function () {
            return T.get("".concat(I.a, "/cards/my-cards"));
          },
          editCard: function (e) {
            var a = e._id;
            return delete e._id, T.put("".concat(I.a, "/cards/").concat(a), e);
          },
          getCard: function (e) {
            return T.get("".concat(I.a, "/cards/").concat(e));
          },
          deleteCard: function (e) {
            return T.delete("".concat(I.a, "/cards/").concat(e));
          },
        },
        R =
          (t(44),
          (function (e) {
            function a() {
              var e, t;
              Object(c.a)(this, a);
              for (
                var n = arguments.length, r = new Array(n), l = 0;
                l < n;
                l++
              )
                r[l] = arguments[l];
              return (
                ((t = Object(o.a)(
                  this,
                  (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
                )).state = {
                  data: {
                    bizName: "",
                    bizDescription: "",
                    bizAddress: "",
                    bizPhone: "",
                    bizImage: "",
                  },
                  errors: {},
                }),
                (t.schema = {
                  bizName: N.a.string().min(2).max(255).required(),
                  bizDescription: N.a.string().min(2).max(1024).required(),
                  bizAddress: N.a.string().min(2).max(400).required(),
                  bizPhone: N.a
                    .string()
                    .min(9)
                    .max(10)
                    .required()
                    .regex(/^0[2-9]\d{7,8}$/),
                  bizImage: N.a.string().min(11).max(1024).uri().allow(""),
                }),
                (t.handleCancel = function () {
                  t.props.history.push("/my-cards");
                }),
                (t.doSubmit = Object(v.a)(
                  E.a.mark(function e() {
                    var a;
                    return E.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.state.data).bizImage || delete a.bizImage,
                              (e.next = 4),
                              J.createCard(t.state.data)
                            );
                          case 4:
                            Object(S.b)("A new card is opened"),
                              t.props.history.replace("/my-cards");
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                t
              );
            }
            return (
              Object(u.a)(a, e),
              Object(i.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      "div",
                      { className: "container" },
                      r.a.createElement(g, {
                        titleText: "Business Registration Form",
                      }),
                      r.a.createElement(
                        "div",
                        { className: "form-style-5" },
                        r.a.createElement(
                          "form",
                          {
                            onSubmit: this.handleSubmit,
                            autoComplete: "off",
                            method: "POST",
                          },
                          r.a.createElement(
                            "fieldset",
                            null,
                            r.a.createElement(
                              "legend",
                              null,
                              r.a.createElement(
                                "span",
                                { className: "number" },
                                "1"
                              ),
                              " Card Info"
                            ),
                            this.renderInput(
                              "bizName",
                              "",
                              "text",
                              "Business Name"
                            ),
                            this.renderInput(
                              "bizDescription",
                              "",
                              "text",
                              "Business Description"
                            ),
                            this.renderInput(
                              "bizAddress",
                              "",
                              "text",
                              "Business Address"
                            ),
                            this.renderInput(
                              "bizPhone",
                              "",
                              "text",
                              "Business Phone"
                            ),
                            this.renderInput(
                              "bizImage",
                              "",
                              "text",
                              "Business Image URL"
                            ),
                            this.renderSubmitButton("Create Card")
                          ),
                          r.a.createElement("input", {
                            type: "button",
                            onClick: this.handleCancel,
                            value: "Cancel",
                          })
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(k)),
        V =
          (t(80),
          function (e) {
            e.path;
            var a = e.component,
              t = e.render,
              n = Object(j.a)(e, ["path", "component", "render"]),
              l = D.getCurrentUser();
            return r.a.createElement(
              _.b,
              Object.assign({}, n, {
                render: function (e) {
                  return !l || (n.biz && !l.biz)
                    ? r.a.createElement(_.a, {
                        to: {
                          pathname: "/signin",
                          state: { from: e.location },
                        },
                      })
                    : a
                    ? r.a.createElement(a, e)
                    : t(e);
                },
              })
            );
          }),
        $ =
          (t(81),
          function (e) {
            var a = e.card;
            return r.a.createElement(
              "div",
              { className: "col-md-6 col-lg-4 mt-3" },
              r.a.createElement(
                "section",
                { className: "cards" },
                r.a.createElement(
                  "article",
                  { className: "card card--1" },
                  r.a.createElement("div", { className: "card__img" }),
                  r.a.createElement(
                    d.b,
                    { to: "#", className: "card_link" },
                    r.a.createElement("div", { className: "card__img--hover" })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "card__info" },
                    r.a.createElement(
                      "span",
                      { className: "card__category" },
                      " ",
                      a.bizName
                    ),
                    r.a.createElement(
                      "h3",
                      { className: "card__title" },
                      a.bizDescription
                    ),
                    r.a.createElement(
                      "span",
                      { className: "card__by" },
                      r.a.createElement(
                        "p",
                        { className: "card-text border-top pt-2" },
                        r.a.createElement("b", null, "Tel: "),
                        a.bizPhone,
                        r.a.createElement("br", null),
                        a.bizAddress
                      ),
                      r.a.createElement(
                        "p",
                        { className: "card-text border-top pt-2" },
                        r.a.createElement(
                          d.b,
                          { to: "/my-cards/edit/".concat(a._id) },
                          "Edit"
                        ),
                        " |",
                        r.a.createElement(
                          d.b,
                          {
                            className: "ml-2",
                            to: "/my-cards/delete/".concat(a._id),
                          },
                          "Delete"
                        )
                      )
                    )
                  )
                )
              )
            );
          }),
        H = (function (e) {
          function a() {
            var e, t;
            Object(c.a)(this, a);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
              )).state = { cards: [] }),
              t
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(v.a)(
                    E.a.mark(function e() {
                      var a, t;
                      return E.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), J.getMyCards();
                              case 2:
                                (a = e.sent),
                                  (t = a.data).length > 0 &&
                                    this.setState({ cards: t });
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.cards;
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(g, { titleText: "My Cards Page" }),
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "col-12" },
                        r.a.createElement(
                          "p",
                          null,
                          "Manage Your Cards in the list below..."
                        )
                      ),
                      r.a.createElement(
                        "span",
                        { className: "ml-auto" },
                        r.a.createElement(
                          d.b,
                          { to: "/create-card", className: "text-success" },
                          r.a.createElement("i", {
                            className: "fas fa-plus-circle mr-2",
                          }),
                          "Add Card"
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      e.length > 0 &&
                        e.map(function (e) {
                          return r.a.createElement($, { key: e._id, card: e });
                        })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Y = (function (e) {
          function a() {
            var e, t;
            Object(c.a)(this, a);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
              )).state = {
                data: {
                  bizName: "",
                  bizDescription: "",
                  bizAddress: "",
                  bizPhone: "",
                  bizImage: "",
                },
                errors: {},
              }),
              (t.schema = {
                _id: N.a.string(),
                bizName: N.a.string().min(2).max(255).required(),
                bizDescription: N.a.string().min(2).max(1024).required(),
                bizAddress: N.a.string().min(2).max(400).required(),
                bizPhone: N.a
                  .string()
                  .min(9)
                  .max(10)
                  .required()
                  .regex(/^0[2-9]\d{7,8}$/),
                bizImage: N.a.string().min(11).max(1024).uri().allow(""),
              }),
              (t.doSubmit = Object(v.a)(
                E.a.mark(function e() {
                  var a;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.state.data), (e.next = 3), J.editCard(a)
                          );
                        case 3:
                          Object(S.b)("Card is updated"),
                            t.props.history.replace("/my-cards");
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (t.handleCancel = function () {
                t.props.history.push("/my-cards");
              }),
              t
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(v.a)(
                    E.a.mark(function e() {
                      var a, t, n;
                      return E.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = this.props.match.params.id),
                                  (e.next = 3),
                                  J.getCard(a)
                                );
                              case 3:
                                (t = e.sent),
                                  (n = t.data),
                                  this.setState({
                                    data: this.mapToViewModel(n),
                                  });
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "mapToViewModel",
                value: function (e) {
                  return {
                    _id: e._id,
                    bizName: e.bizName,
                    bizDescription: e.bizDescription,
                    bizAddress: e.bizAddress,
                    bizPhone: e.bizPhone,
                    bizImage: e.bizImage,
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(g, { titleText: "Edit Card Form" }),
                    r.a.createElement(
                      "div",
                      { className: "form-style-5" },
                      r.a.createElement(
                        "form",
                        {
                          onSubmit: this.handleSubmit,
                          autoComplete: "off",
                          method: "POST",
                        },
                        r.a.createElement(
                          "legend",
                          null,
                          r.a.createElement(
                            "span",
                            { className: "number" },
                            "1"
                          ),
                          " Card Info"
                        ),
                        r.a.createElement(
                          "fieldset",
                          null,
                          this.renderInput("bizName", "Business Name"),
                          this.renderInput(
                            "bizDescription",
                            "Business Description"
                          ),
                          this.renderInput("bizAddress", "Business Address"),
                          this.renderInput("bizPhone", "Business Phone"),
                          this.renderInput("bizImage", "Business Image"),
                          this.renderButton("Update Card"),
                          r.a.createElement(
                            "button",
                            {
                              className: "btn btn-secondary ml-2",
                              onClick: this.handleCancel,
                            },
                            "Cancel"
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(k),
        G = (function (e) {
          function a() {
            var e, t;
            Object(c.a)(this, a);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
              )).state = {}),
              (t.schema = {}),
              (t.handleCancel = function () {
                t.props.history.push("/my-cards");
              }),
              (t.doSubmit = Object(v.a)(
                E.a.mark(function e() {
                  var a;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.props.match.params.id),
                            (e.next = 3),
                            J.deleteCard(a)
                          );
                        case 3:
                          Object(S.b)("Card is deleted"),
                            t.props.history.replace("/my-cards");
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              t
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(g, {
                      titleText: "Are you sure you want to delete this card?",
                    }),
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(
                          "form",
                          {
                            onSubmit: this.handleSubmit,
                            autoComplete: "off",
                            method: "POST",
                          },
                          this.renderButton("Delete card", "danger"),
                          r.a.createElement(
                            "button",
                            {
                              className: "btn btn-secondary ml-2",
                              onClick: this.handleCancel,
                            },
                            "Cancel"
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(k),
        K = (function (e) {
          function a() {
            var e, t;
            Object(c.a)(this, a);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
              )).state = {}),
              t
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    {
                      className:
                        "jumbotron p-4 p-md-5 text-white rounded bg-dark",
                    },
                    r.a.createElement(
                      "div",
                      { className: "col-md-6 px-0" },
                      r.a.createElement(
                        "h1",
                        { className: "display-4 font-italic" },
                        "Title of a longer featured blog post"
                      ),
                      r.a.createElement(
                        "p",
                        { className: "lead my-3" },
                        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what\u2019s most interesting in this post\u2019s contents."
                      ),
                      r.a.createElement(
                        "p",
                        { className: "lead mb-0" },
                        "Continue reading..."
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Q = (function (e) {
          function a() {
            var e, t;
            Object(c.a)(this, a);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(m.a)(a)).call.apply(e, [this].concat(r))
              )).state = {}),
              t
            );
          }
          return (
            Object(u.a)(a, e),
            Object(i.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = D.getCurrentUser();
                  this.setState({ user: e });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.user;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(S.a, null),
                    r.a.createElement(
                      "header",
                      null,
                      r.a.createElement(p, { user: e })
                    ),
                    r.a.createElement(
                      "main",
                      { style: { minHeight: 500 } },
                      r.a.createElement(
                        _.d,
                        null,
                        r.a.createElement(V, {
                          path: "/my-cards/delete/:id",
                          component: G,
                          biz: !0,
                        }),
                        r.a.createElement(V, {
                          path: "/my-cards/edit/:id",
                          component: Y,
                          biz: !0,
                        }),
                        r.a.createElement(V, {
                          path: "/my-cards",
                          component: H,
                          biz: !0,
                        }),
                        r.a.createElement(V, {
                          path: "/create-card",
                          component: R,
                          biz: !0,
                        }),
                        r.a.createElement(_.b, {
                          path: "/biz-signup",
                          component: W,
                        }),
                        r.a.createElement(_.b, {
                          path: "/logout",
                          component: F,
                        }),
                        r.a.createElement(_.b, {
                          path: "/signin",
                          component: U,
                        }),
                        r.a.createElement(_.b, {
                          path: "/signup",
                          component: L,
                        }),
                        r.a.createElement(_.b, { path: "/test", component: K }),
                        r.a.createElement(_.b, {
                          path: "/",
                          exact: !0,
                          component: h,
                        })
                      )
                    ),
                    r.a.createElement(
                      "footer",
                      {
                        className:
                          "page-footer font-small stylish-color-dark pt-4",
                      },
                      r.a.createElement(b, null)
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      t(82), t(83), t(84);
      s.a.render(
        r.a.createElement(d.a, null, r.a.createElement(Q, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[48, 1, 2]],
]);
//# sourceMappingURL=main.cbeb4b75.chunk.js.map
