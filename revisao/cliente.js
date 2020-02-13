"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var empresa;
(function (empresa) {
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cliente.prototype.getSaldo = function () {
            return this.saldo;
        };
        Cliente.prototype.getLimite = function () {
            return this.saldo;
        };
        Cliente.prototype.getCodCliente = function () {
            return this.saldo;
        };
        Cliente.prototype.setSaldo = function (saldo) {
            this.saldo = saldo;
        };
        Cliente.prototype.setLimite = function (limite) {
            this.limite = limite;
        };
        Cliente.prototype.setCodCliente = function (codCliente) {
            this.codCliente = codCliente;
        };
        return Cliente;
    }(empresa.Pessoa));
})(empresa || (empresa = {}));
