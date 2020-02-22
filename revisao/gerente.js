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
    var Gerente = /** @class */ (function (_super) {
        __extends(Gerente, _super);
        function Gerente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Gerente.prototype.getSetor = function () {
            return this.setor;
        };
        Gerente.prototype.setSetor = function (setor) {
            this.setor = setor;
        };
        Gerente.prototype.calcularSalario = function () {
            return (this.getValorDia() * 30) + (this.getValorDia() * 0.3);
        };
        return Gerente;
    }(empresa.Funcionario));
    empresa.Gerente = Gerente;
})(empresa || (empresa = {}));
