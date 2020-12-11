"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Pagination = exports.DeleteForm = exports.UpdateForm = exports.CreateForm = exports.Field = exports.Fields = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _helpers = require("./helpers");

var _wrappers = require("./wrappers");

var _Header = _interopRequireDefault(require("./Header"));

var _Body = _interopRequireDefault(require("./Body"));

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _FormModal = _interopRequireDefault(require("../FormModal"));

var _QueryBuilder = _interopRequireDefault(require("../QueryBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CRUDTable = /*#__PURE__*/function (_React$Component) {
  _inherits(CRUDTable, _React$Component);

  var _super = _createSuper(CRUDTable);

  function CRUDTable(props) {
    var _this;

    _classCallCheck(this, CRUDTable);

    _this = _super.call(this, props);
    _this.updateModalController = null;
    _this.deleteModalController = null;
    _this.handleOnCreateSubmission = _this.handleOnCreateSubmission.bind(_assertThisInitialized(_this));
    _this.handleOnDeleteSubmission = _this.handleOnDeleteSubmission.bind(_assertThisInitialized(_this));
    _this.handleOnUpdateSubmission = _this.handleOnUpdateSubmission.bind(_assertThisInitialized(_this));
    _this.handleHeaderClick = _this.handleHeaderClick.bind(_assertThisInitialized(_this));
    _this.handlePageChange = _this.handlePageChange.bind(_assertThisInitialized(_this));
    _this.handleRuleAdded = _this.handleRuleAdded.bind(_assertThisInitialized(_this));
    _this.handleRuleRemoved = _this.handleRuleRemoved.bind(_assertThisInitialized(_this));

    var configItems = _react["default"].Children.toArray(props.children);

    _this.fields = (0, _helpers.extractFields)(configItems);
    _this.forms = (0, _helpers.extractForms)(configItems, _this.fields);
    _this.pagination = (0, _helpers.extractPagination)(configItems);
    _this.queryFields = (0, _helpers.extractQueryFields)(configItems);
    _this.state = {
      items: props.items,
      sort: {
        field: _constants.ID_FIELD,
        direction: _constants.SORT_DIRECTIONS.DESCENDING
      },
      queryRules: [],
      updateItem: {},
      deleteItem: {},
      pagination: _objectSpread(_objectSpread({}, _this.pagination), {}, {
        activePage: _this.pagination.activePage || _this.pagination.defaultActivePage || 1,
        totalOfItems: _this.pagination.totalOfItems || 0,
        itemsPerPage: _this.pagination.itemsPerPage || 10
      }),
      totalOfItems: _this.pagination.totalOfItems || 0
    };
    return _this;
  }

  _createClass(CRUDTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update(undefined, false);
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var items = this.props.items;
      var newState = {};

      if (nextProps.items !== items) {
        newState.items = nextProps.items;
        var paginationProps = (0, _helpers.getPaginationProps)(nextProps);
        newState.totalOfItems = paginationProps.totalOfItems || 0;
      }

      if (Object.keys(newState).length) {
        this.setState(newState);
      }
    }
  }, {
    key: "handleHeaderClick",
    value: function handleHeaderClick(field, direction) {
      var sort = this.state.sort;
      var newSort = {
        field: field,
        direction: (0, _helpers.toggleDirection)(direction, field === sort.field)
      };
      this.setState({
        sort: newSort
      });
      this.update({
        sort: newSort
      });
    }
  }, {
    key: "handlePageChange",
    value: function handlePageChange(activePage) {
      var pagination = _objectSpread(_objectSpread({}, this.state.pagination), {}, {
        activePage: activePage
      });

      this.setState({
        pagination: pagination
      });
      this.update({
        pagination: pagination
      });
    }
  }, {
    key: "handleOnCreateSubmission",
    value: function handleOnCreateSubmission(values) {
      var _this2 = this;

      return this.forms.create.onSubmit(values).then(function (result) {
        _this2.update();

        return result;
      });
    }
  }, {
    key: "handleOnUpdateSubmission",
    value: function handleOnUpdateSubmission(values) {
      var _this3 = this;

      return this.forms.update.onSubmit(values).then(function (result) {
        _this3.update();

        return result;
      });
    }
  }, {
    key: "handleOnDeleteSubmission",
    value: function handleOnDeleteSubmission(values) {
      var _this4 = this;

      return this.forms["delete"].onSubmit(values).then(function (result) {
        _this4.update();

        return result;
      });
    }
  }, {
    key: "handleRuleAdded",
    value: function handleRuleAdded(rule) {
      var queryRules = this.state.queryRules;
      var newQueryRules = [].concat(_toConsumableArray(queryRules), [rule]);
      this.setState({
        queryRules: newQueryRules
      });
      this.update({
        queryRules: newQueryRules
      });
    }
  }, {
    key: "handleRuleRemoved",
    value: function handleRuleRemoved(rule) {
      var queryRules = this.state.queryRules;
      var newQueryRules = queryRules.filter(function (x) {
        return x.field !== rule.field || x.condition !== rule.condition;
      });
      this.setState({
        queryRules: newQueryRules
      });
      this.update({
        queryRules: newQueryRules
      });
    }
  }, {
    key: "getPayload",
    value: function getPayload() {
      var extension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$state = this.state,
          queryRules = _this$state.queryRules,
          pagination = _this$state.pagination,
          sort = _this$state.sort;
      return _objectSpread({
        queryRules: queryRules,
        pagination: pagination,
        sort: sort
      }, extension);
    }
  }, {
    key: "update",
    value: function update(data) {
      var _this5 = this;

      var reportChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$props = this.props,
          fetchItems = _this$props.fetchItems,
          onChange = _this$props.onChange;
      var payload = this.getPayload(data);

      if (fetchItems) {
        fetchItems(payload).then(function (items) {
          _this5.setState({
            items: items
          });
        });
      }

      if (this.pagination.fetchTotalOfItems) {
        this.pagination.fetchTotalOfItems(payload).then(function (totalOfItems) {
          _this5.setState({
            totalOfItems: totalOfItems
          });
        });
      }

      if (reportChange) {
        onChange(payload);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$state2 = this.state,
          items = _this$state2.items,
          sort = _this$state2.sort,
          pagination = _this$state2.pagination,
          totalOfItems = _this$state2.totalOfItems,
          deleteItem = _this$state2.deleteItem,
          updateItem = _this$state2.updateItem,
          queryRules = _this$state2.queryRules;
      var _this$props2 = this.props,
          caption = _this$props2.caption,
          showQueryBuilder = _this$props2.showQueryBuilder,
          actionsLabel = _this$props2.actionsLabel;
      var tabularFields = this.fields.filter(function (f) {
        return !f.hideFromTable;
      });
      var updateTrigger = (0, _helpers.queryValue)(this.forms, 'update.trigger');
      var deleteTrigger = (0, _helpers.queryValue)(this.forms, 'delete.trigger');
      return /*#__PURE__*/_react["default"].createElement("div", null, this.forms.create && /*#__PURE__*/_react["default"].createElement(_FormModal["default"], {
        trigger: this.forms.create.trigger,
        data: this.forms.create,
        onSubmit: this.handleOnCreateSubmission,
        shouldReset: true
      }), /*#__PURE__*/_react["default"].createElement(_wrappers.Table.Caption, null, caption), showQueryBuilder && /*#__PURE__*/_react["default"].createElement(_QueryBuilder["default"], {
        queryRules: queryRules,
        fields: this.queryFields,
        onRuleAdded: this.handleRuleAdded,
        onRuleRemoved: this.handleRuleRemoved
      }), /*#__PURE__*/_react["default"].createElement(_wrappers.Table, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        fields: tabularFields,
        sort: sort,
        onClick: this.handleHeaderClick,
        actionsLabel: updateTrigger || deleteTrigger ? actionsLabel : ''
      }), /*#__PURE__*/_react["default"].createElement(_Body["default"], {
        fields: tabularFields,
        items: items,
        updateTrigger: updateTrigger,
        deleteTrigger: deleteTrigger,
        actionsLabel: actionsLabel,
        onDeleteClick: function onDeleteClick(item) {
          _this6.setState({
            deleteItem: item
          });

          _this6.deleteModalController.show();
        },
        onUpdateClick: function onUpdateClick(item) {
          _this6.setState({
            updateItem: item
          });

          _this6.updateModalController.show();
        }
      })), !!pagination && totalOfItems > 0 && /*#__PURE__*/_react["default"].createElement(_Pagination["default"], _extends({}, pagination, {
        totalOfItems: totalOfItems,
        onPageChange: this.handlePageChange
      })), this.forms.update && /*#__PURE__*/_react["default"].createElement(_FormModal["default"], {
        initialValues: updateItem,
        data: this.forms.update,
        onSubmit: this.handleOnUpdateSubmission,
        onInit: function onInit(controller) {
          _this6.updateModalController = controller;
        }
      }), this.forms["delete"] && /*#__PURE__*/_react["default"].createElement(_FormModal["default"], {
        initialValues: deleteItem,
        data: this.forms["delete"],
        onSubmit: this.handleOnDeleteSubmission,
        onInit: function onInit(controller) {
          _this6.deleteModalController = controller;
        }
      }));
    }
  }]);

  return CRUDTable;
}(_react["default"].Component);

CRUDTable.defaultProps = {
  onChange: function onChange() {},
  actionsLabel: 'Actions',
  showQueryBuilder: false,
  items: [],
  caption: null,
  fetchItems: null
};
CRUDTable.propTypes = {
  onChange: _propTypes["default"].func,
  actionsLabel: _propTypes["default"].node,
  showQueryBuilder: _propTypes["default"].bool,
  items: _propTypes["default"].instanceOf(Object),
  caption: _propTypes["default"].node,
  fetchItems: _propTypes["default"].func,
  children: _propTypes["default"].oneOf([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired
};

var Fields = function Fields() {
  return /*#__PURE__*/_react["default"].createElement("div", null);
};

exports.Fields = Fields;
Fields.displayName = _constants.FIELDS_COMPONENT_TYPE;

var Field = function Field(_ref) {
  var name = _ref.name,
      label = _ref.label,
      tableValueResolver = _ref.tableValueResolver,
      hideInCreateForm = _ref.hideInCreateForm,
      hideInUpdateForm = _ref.hideInUpdateForm,
      hideFromTable = _ref.hideFromTable,
      queryable = _ref.queryable,
      type = _ref.type,
      sortable = _ref.sortable;
  return /*#__PURE__*/_react["default"].createElement("div", null);
};

exports.Field = Field;
Field.displayName = _constants.FIELD_COMPONENT_TYPE;
Field.propTypes = {
  name: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  tableValueResolver: _propTypes["default"].oneOf([_propTypes["default"].func, _propTypes["default"].string]),
  hideInCreateForm: _propTypes["default"].bool,
  hideInUpdateForm: _propTypes["default"].bool,
  hideFromTable: _propTypes["default"].bool,
  queryable: _propTypes["default"].bool,
  sortable: _propTypes["default"].bool
};
Field.defaultProps = {
  queryable: true,
  sortable: true,
  type: 'text',
  hideInCreateForm: false,
  hideInUpdateForm: false,
  hideFromTable: false,
  tableValueResolver: null
};

var CreateForm = function CreateForm() {
  return /*#__PURE__*/_react["default"].createElement("div", null);
};

exports.CreateForm = CreateForm;
CreateForm.displayName = _constants.CREATE_FORM_COMPONENT_TYPE;

var UpdateForm = function UpdateForm() {
  return /*#__PURE__*/_react["default"].createElement("div", null);
};

exports.UpdateForm = UpdateForm;
UpdateForm.displayName = _constants.UPDATE_FORM_COMPONENT_TYPE;

var DeleteForm = function DeleteForm() {
  return /*#__PURE__*/_react["default"].createElement("div", null);
};

exports.DeleteForm = DeleteForm;
DeleteForm.displayName = _constants.DELETE_FORM_COMPONENT_TYPE;

var Pagination = function Pagination() {
  return /*#__PURE__*/_react["default"].createElement("div", null);
};

exports.Pagination = Pagination;
Pagination.displayName = _constants.PAGINATION_COMPONENT_TYPE;
var _default = CRUDTable;
exports["default"] = _default;